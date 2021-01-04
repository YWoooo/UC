import { AxiosRequestConfig } from 'axios'
import cookiejs from 'cookiejs'

export const onRequest = (reqConfig: AxiosRequestConfig) => {
  const accessToken: any = cookiejs.get('accessToken')
  if (accessToken) {
    reqConfig.headers.Authorization = 'Bearer ' + accessToken
  }
  return reqConfig
}

