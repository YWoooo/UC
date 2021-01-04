import baseUrl from './baseUrl'
import axios from '../https'
import qs from 'qs'
import { Login } from '@/interfaces/login'

export const authApi = {
  login(sendData: Login.SendData) {
    return axios.post(`${baseUrl.local}/login`, qs.stringify(sendData))
  },
  register(sendData: any) {
    return axios.post(`${baseUrl.local}/register`, qs.stringify(sendData))
  }
}

