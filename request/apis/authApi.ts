import { Login } from '@/interfaces/login'

export default function authApi(axios: any) {
  return {
    async login(sendData: Login.SendData) {
      const res = await axios.$post('/login', sendData)
      return res
    }
  }
}
