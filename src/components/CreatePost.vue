<template lang="">

  <section class="q-mt-xl q-pa-md tw-w-full tw-max-w-sm tw-mx-auto tw-bg-white tw-shadow-sm tw-rounded-2xl">
    <header>
      <div class="row items-center">
        <q-avatar class="tw-w-10 tw-h-10 sm:tw-w-12 sm:tw-h-12">
          <img class="" src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=128" alt="user avatar profile">
        </q-avatar>
        <span class="q-mx-sm tw-text-sm">{{ user?.name }}</span>
      </div>
    </header>
    <section class="q-mt-md">
        <p @click="toggleCreatePost" class="q-pa-sm tw-bg-neutral-100 tw-text-gray-400 tw-w-full tw-rounded-lg cursor-pointer hover:tw-bg-slate-100 hover:tw-text-gray-500 tw-transition-all tw-duration-300">Crear una publicacion</p>
    </section>
  </section>

  <div v-if="showCreatePost" class="fixed-center full-width full-height column justify-center items-center tw-bg-neutral-800/40">
    <article class="bg-grey-1 tw-w-full tw-max-w-md tw-min-h-[250px] tw-shadow-md">

      <header class="row justify-between items-center">
        <h2 class="q-my-md tw-text-2xl tw-mx-auto tw-text-center ">Create Post</h2>
        <q-icon @click="toggleCreatePost" class="q-mx-md tw-text-2xl cursor-pointer" name="close"></q-icon>
      </header>

      <div class="tw-max-h-[350px] tw-overflow-y-scroll">
        <q-editor class="" v-model="editorText" flat toolbar-color="primary" spellcheck="false"   :toolbar="[
          ['bold', 'italic', 'strike', 'underline']
        ]"/>
      </div>

    </article>
  </div>

</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from 'src/stores/userStore';
import { ref } from 'vue';
  const showCreatePost = ref(false)
  const editorText = ref('')
  const userStore = useUserStore()
  const {user} = storeToRefs(userStore)

  const toggleCreatePost = () => {
    showCreatePost.value = !showCreatePost.value
  }
</script>
<style lang="">

</style>
