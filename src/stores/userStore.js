import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';
import {api} from '../boot/axios';
import { getCSRFCookie } from 'src/utils';
export const useUserStore = defineStore('user', () => {

  const user = ref(null)


  const getUser = async () => {
      const resp = await api.get('/user')
      const data = resp.data
      console.log(data)
  }


  return {user, getUser}
});
