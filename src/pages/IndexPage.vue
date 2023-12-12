<template>
  <q-page class="">
    <create-post/>
  </q-page>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from 'src/stores/userStore';
import CreatePost from 'src/components/CreatePost.vue';
  const userStore = useUserStore()
  const {user} = storeToRefs(userStore)
  const {} = userStore
</script>
