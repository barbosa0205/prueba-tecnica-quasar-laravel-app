import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';
import {api} from '../boot/axios';
import { getCSRFCookie } from 'src/utils';
export const useAuthStore = defineStore('auth', () => {

  const signupErrors = ref(null)


  onMounted(() => {
    getCSRFCookie()
  })

  const register = async ({name,email,password}) => {
    try {

      const resp = await api.post('/signup', {
        name,
        email,
        password
      })



      console.log({data})

    } catch (e) {

        signupErrors.value = e.response.data.errors

    }
  }



  return {register, signupErrors}
});
