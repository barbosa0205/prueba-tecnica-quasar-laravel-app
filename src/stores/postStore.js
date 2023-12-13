import { defineStore, storeToRefs } from "pinia";
import { api } from "src/boot/axios";
import { ref } from "vue";
import { useUserStore } from "./userStore";

export const usePostStore = defineStore("post", () => {
  const userStore = useUserStore();

  const { user } = storeToRefs(userStore);

  const recentPosts = ref(null);

  const getRecentPosts = async (qty = 5) => {
    try {
      const resp = await api.get(`/posts?qty=${qty}`);
      const data = resp.data;

      recentPosts.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  const storePost = async ({ user_id, title, body }) => {
    try {
      const resp = await api.post("/posts", {
        user_id,
        title,
        body,
      });
      const data = resp.data;

      recentPosts.value.data = [
        { ...data.post, user },
        ...recentPosts.value.data,
      ];

      return resp;
    } catch (error) {
      return error;
    }
  };

  const updatePost = async ({ user_id, post_id, title, body }) => {
    try {
      const resp = await api.put(`/posts/${post_id}`, {
        user_id,
        title,
        body,
        post_id,
      });
      const data = resp.data;
      const indexOfPost = recentPosts.value.data.findIndex(
        (post) => post.id === post_id
      );

      const userOfPost = recentPosts.value.data[indexOfPost].user;

      const newRecentPostsArray = recentPosts.value.data;

      newRecentPostsArray[indexOfPost] = { ...data.post, user: userOfPost };

      recentPosts.value.data = newRecentPostsArray;
      return resp;
    } catch (error) {
      return error;
    }
  };

  const deletePost = async (id) => {
    try {
      const resp = await api.delete(`/posts/${id}`);
      const data = resp.data;

      const newArrayFiltered = recentPosts.value.data.filter(
        (post) => post.id !== id
      );

      recentPosts.value.data = newArrayFiltered;
    } catch (error) {
      console.log(error);
    }
  };

  return { storePost, updatePost, getRecentPosts, recentPosts, deletePost };
});
