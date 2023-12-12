import {api} from "src/boot/axios"

const getCSRFCookie = async () => {
 try {
  await api.get(`/csrf-cookie`)
 } catch (error) {
  console.log(error)
 }
}

const verifyTokenInLocalStorage = () => {
  if(localStorage.getItem('prueba-tecninca-quasar-token')) {
    api.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('prueba-tecninca-quasar-token')
  }
}

export {getCSRFCookie,verifyTokenInLocalStorage}
