import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const usePostStore = defineStore("post", () => {
  const storePost = async ({ user_id, title, body }) => {
    try {
      const resp = await api.post("/posts", {
        user_id,
        title,
        body,
      });
      const data = resp.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { storePost };
});
