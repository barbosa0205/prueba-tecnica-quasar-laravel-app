import {api} from "src/boot/axios"

const getCSRFCookie = async () => {
 try {
  await api.get(`/csrf-cookie`)
 } catch (error) {
  console.log(error)
 }
}

export {getCSRFCookie}
