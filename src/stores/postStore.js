import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const usePostStore = defineStore("post", () => {
  const getRecentPosts = async (qty = 5) => {
    try {
      const resp = await api.get(`/posts?qty=${qty}`);
      const data = resp.data;
      return data;
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
      console.log(data);
      return [];
    } catch (error) {
      console.log(error);
    }
  };

  return { storePost, getRecentPosts };
});
