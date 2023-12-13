<template lang="">
  <section
    class="q-mt-xl q-pa-md tw-w-full tw-max-w-md tw-mx-auto tw-bg-white tw-shadow-sm tw-rounded-2xl"
  >
    <header v-if="user">
      <div class="row items-center">
        <q-avatar class="tw-w-10 tw-h-10 sm:tw-w-12 sm:tw-h-12">
          <img
            class=""
            src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=128"
            alt="user avatar profile"
          />
        </q-avatar>
        <span class="q-mx-sm tw-text-sm">{{ user?.name }}</span>
      </div>
    </header>
    <section class="q-mt-md">
      <p
        @click="toggleCreatePost"
        class="q-pa-sm tw-bg-neutral-100 tw-text-gray-400 tw-w-full tw-rounded-lg cursor-pointer hover:tw-bg-slate-100 hover:tw-text-gray-500 tw-transition-all tw-duration-300"
      >
        Crear una publicacion
      </p>
    </section>
  </section>

  <!-- Modal Create Post -->
  <div
    v-if="showCreatePost"
    class="fixed-center full-width full-height column justify-center items-center tw-bg-neutral-800/40 tw-z-10"
  >
    <q-card class="tw-w-full tw-max-w-md tw-min-h-[250px] tw-shadow-md">
      <header class="bg-blue-grey-1 row justify-between items-center">
        <h2 class="q-my-md tw-text-2xl tw-mx-auto tw-text-center">
          Create Post
        </h2>
        <q-icon
          avatar
          @click="toggleCreatePost"
          class="q-mx-md tw-text-2xl cursor-pointer"
          name="close"
        ></q-icon>
      </header>

      <div class="tw-max-h-[350px] tw-overflow-y-scroll">
        <display-errors
          class="q-mt-md q-ml-sm"
          :errors="createPostErrors"
          field="title"
        />

        <q-input
          class="q-px-sm tw-text-xl"
          v-model="postTitle"
          placeholder="Titulo del post"
          borderless
        />
        <q-editor
          class="tw-rounded-none tw-text-lg"
          v-model="postText"
          flat
          toolbar-color="primary"
          spellcheck="false"
          placeholder="Cuerpo de tu post"
          :toolbar="[['bold', 'italic', 'strike', 'underline']]"
        />
      </div>
      <display-errors
        class="q-mt-md q-ml-sm"
        :errors="createPostErrors"
        field="body"
      />
      <div class="row tw-justify-end items-center">
        <primary-button
          @click="handleStorePost"
          label="publicar"
          size="md"
          class="q-ma-md"
        />
      </div>
    </q-card>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "src/stores/userStore";
import { usePostStore } from "src/stores/postStore";

import { ref } from "vue";
import { useRouter } from "vue-router";

import PrimaryButton from "./PrimaryButton.vue";
import DisplayErrors from "../components/DisplayErrors.vue";

const router = useRouter();

const showCreatePost = ref(false);
const postTitle = ref("");
const postText = ref("");
const createPostErrors = ref(null);
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const postStore = usePostStore();
const { storePost } = postStore;

const toggleCreatePost = () => {
  if (!user.value) {
    return router.push({ name: "signin" });
  }
  showCreatePost.value = !showCreatePost.value;
};

const handleStorePost = () => {
  storePost({
    title: postTitle.value,
    body: postText.value,
    user_id: user.value.id,
  }).then((q) => {
    console.log(q);
    if (q?.response?.status === 422) {
      console.log(q.response.data.errors);
      createPostErrors.value = q.response.data.errors;
    }
    if (q.status === 201) {
      console.log("todo bien mi comando");
      toggleCreatePost();
    }
  });
};
</script>
<style lang=""></style>
