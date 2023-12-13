<template lang="">
  <q-card class="full-width tw-max-w-md q-mb-md tw-shadow-sm">
    <header class="q-pa-md row items-center justify-between">
      <div class="row items-center">
        <q-avatar class="tw-w-10 tw-h-10 sm:tw-w-12 sm:tw-h-12">
          <img
            class=""
            src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=128"
            alt="user avatar profile"
          />
        </q-avatar>
        <span class="q-mx-sm tw-text-sm">{{ postData?.user.name }}</span>
      </div>
      <q-btn-dropdown
        v-if="user?.id === postData?.user_id"
        flat
        dense
        auto-close
      >
        <q-list>
          <q-item @click="toggleEditPost()" clickable dense>Editar</q-item>
          <q-item @click="deletePost(postData.id)" clickable dense
            >Eliminar</q-item
          >
        </q-list>
      </q-btn-dropdown>
    </header>
    <h2 class="q-px-md q-mb-md tw-truncate tw-text-lg tw-font-medium">
      {{ postData.title }}
    </h2>
    <section class="q-px-md q-mb-md" v-html="postData.body"></section>
    <footer class="full-width bg-grey-2"></footer>
  </q-card>

  <div
    v-if="showEditPost"
    class="fixed-center full-width full-height column justify-center items-center tw-bg-neutral-800/40 tw-z-10"
  >
    <q-card class="tw-w-full tw-max-w-md tw-min-h-[250px] tw-shadow-md">
      <header class="bg-blue-grey-1 row justify-between items-center">
        <h2 class="q-my-md tw-text-2xl tw-mx-auto tw-text-center">Edit Post</h2>
        <q-icon
          avatar
          @click="toggleEditPost"
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
          label="publicar"
          size="md"
          class="q-ma-md"
          @click="
            () => {
              updatePost({
                title: postTitle,
                body: postText,
                user_id: postData.user_id,
                post_id: postData.id,
              });
              toggleEditPost();
            }
          "
        />
      </div>
    </q-card>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "src/stores/userStore";
import { ref } from "vue";
import { useRouter } from "vue-router";
import PrimaryButton from "./PrimaryButton.vue";
import { usePostStore } from "src/stores/postStore";
const { postData } = defineProps({
  postData: Object,
});

const router = useRouter();

const userStore = useUserStore();

const { user } = storeToRefs(userStore);

const postStore = usePostStore();

const { updatePost, deletePost } = postStore;

const showEditPost = ref(false);
const postTitle = ref(postData?.title);
const postText = ref(postData?.body);

const toggleEditPost = () => {
  showEditPost.value = !showEditPost.value;
};
</script>
<style lang=""></style>
