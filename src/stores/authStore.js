import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import {api, axios} from '../boot/axios';
import { getCSRFCookie } from 'src/utils';
export const useAuthStore = defineStore('auth', () => {

  const router = useRouter()

  const signupErrors = ref(null)
  const signinErrors = ref(null)


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
      const data = await resp.data
      if(data.token) {
        api.defaults.headers.common['Authorization'] = 'Bearer ' + data.token

        localStorage.setItem('prueba-tecninca-quasar-token', data.token)
          router.push('/')
      }

    } catch (e) {

        signupErrors.value = e.response.data.errors

    }
  }

  const login = async ({email,password}) => {
    try {

      const resp = await api.post('/signin', {
        email,
        password
      })
      const data = await resp.data
      if(data.token) {

      api.defaults.headers.common['Authorization'] = 'Bearer ' + data.token

      localStorage.setItem('prueba-tecninca-quasar-token', data.token)
        router.push('/')
      }

    } catch (e) {

        signinErrors.value = e.response.data.errors

    }
  }


  return {register, login, signinErrors, signupErrors}
});
