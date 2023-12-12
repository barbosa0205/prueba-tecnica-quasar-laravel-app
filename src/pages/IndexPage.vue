<template>
  <q-page class="flex flex-center">

  </q-page>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from 'src/stores/userStore';

  const userStore = useUserStore()
  const {user} = storeToRefs(userStore)
  const {} = userStore
</script>
