<template lang="">
  <q-card class="full-width tw-max-w-md q-mb-md tw-shadow-sm">
    <header class="q-pa-md">
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
    <section class="q-px-md q-mb-md" v-html="postData.body"></section>
    <footer class="full-width bg-grey-2"></footer>
  </q-card>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "src/stores/userStore";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const { postData } = defineProps({
  postData: Object,
});
</script>
<style lang=""></style>
