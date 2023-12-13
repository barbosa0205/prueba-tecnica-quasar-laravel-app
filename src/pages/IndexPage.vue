<template>
  <q-page class="">
    <create-post />
    <section
      v-if="recentPosts"
      class="full-width column items-center justify-center q-mt-xl q-px-md"
    >
      <PostCard
        v-for="(post, index) in recentPosts.data"
        :key="index"
        :post-data="post"
      />
    </section>
  </q-page>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "src/stores/userStore";
import CreatePost from "src/components/CreatePost.vue";
import PostCard from "src/components/PostCard.vue";
import { usePostStore } from "src/stores/postStore";
import { onMounted, ref } from "vue";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const postStore = usePostStore();
const { getRecentPosts } = postStore;
const { recentPosts } = storeToRefs(postStore);

onMounted(async () => {
  getRecentPosts();
});
</script>
