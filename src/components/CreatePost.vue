<template lang="">
  <section
    class="q-mt-xl q-pa-md tw-w-full tw-max-w-sm tw-mx-auto tw-bg-white tw-shadow-sm tw-rounded-2xl"
  >
    <header>
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
    class="fixed-center full-width full-height column justify-center items-center tw-bg-neutral-800/40"
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
        <q-input
          class="q-px-sm tw-text-xl"
          v-model="postTitle"
          placeholder="Titulo del post"
          borderless
        />
        <q-editor
          class="tw-rounded-none"
          v-model="postText"
          flat
          toolbar-color="primary"
          spellcheck="false"
          :toolbar="[['bold', 'italic', 'strike', 'underline']]"
        />
      </div>
      <div class="row tw-justify-end items-center">
        <primary-button
          @click="
            storePost({
              title: postTitle,
              body: postText,
              user_id: user.id,
            })
          "
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

import PrimaryButton from "./PrimaryButton.vue";

const showCreatePost = ref(false);
const postTitle = ref("");
const postText = ref("");

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const postStore = usePostStore();
const { storePost } = postStore;

const toggleCreatePost = () => {
  showCreatePost.value = !showCreatePost.value;
};
</script>
<style lang=""></style>
