<template>
  <q-page class="">
    <create-post />
  </q-page>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "src/stores/userStore";
import CreatePost from "src/components/CreatePost.vue";
import { usePostStore } from "src/stores/postStore";
import { onMounted, ref } from "vue";
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const postStore = usePostStore();
const { getRecentPosts } = postStore;

const recentPosts = ref(null);

onMounted(() => {
  recentPosts.value = getRecentPosts();
});
</script>
