import { Login } from '@/interfaces/login'
import { Register } from '@/interfaces/Register'
import { VerifyCode } from '@/interfaces/VerifyCode'

export default function authApi(axios: any) {
  return {
    async login(sendData: Login.SendData) {
      const res = await axios.$post('/login', sendData)
      return res
    },
    async register(sendData: Register.SendData) {
      return await axios.$post('/register', sendData)
    },
    async getVerifyCode(params: VerifyCode.Params) {
      return await axios.$post('/verifyCode', params)
    },
  }
}
