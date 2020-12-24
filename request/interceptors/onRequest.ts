import { AxiosRequestConfig } from 'axios'
import cookiejs from 'cookiejs'

export const onRequest = (reqConfig: AxiosRequestConfig) => {
  const token: any = cookiejs.get('token')
  if (token) {
    reqConfig.headers.Authorization = 'Bearer ' + token
  }
  return reqConfig
}

