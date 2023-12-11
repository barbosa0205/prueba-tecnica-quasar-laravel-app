import { defineStore } from 'pinia';
import { ref } from 'vue';
import {api} from '../boot/axios';
import { getCSRFCookie } from 'src/utils';
export const useUserStore = defineStore('user', () => {

  const user = ref(null)

  const register = async ({name,email,password}) => {
    try {
      await api.get(`/csrf-cookie`)
      const resp = await api.post('/signup', {
        "name": "keila",
        "email": "keila@gmail.com",
        "password": "keilapassword"
      })

    } catch (error) {
      console.log(error)
    }
  }



  return {user, register}
});
