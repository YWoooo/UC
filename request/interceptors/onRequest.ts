import { AxiosRequestConfig } from '@nuxtjs/axios/node_modules/axios'
import cookiejs from 'cookiejs'

export const onRequest = (reqConfig: AxiosRequestConfig) => {
  setAccessToken(reqConfig)
  setRefreshToken(reqConfig)
  return reqConfig
}

const setAccessToken = (reqConfig: AxiosRequestConfig) => {
  const accessToken: any = cookiejs.get('accessToken')
  if (accessToken) {
    reqConfig.headers.Authorization = 'Bearer ' + accessToken
  }
}

const setRefreshToken = (reqConfig: AxiosRequestConfig) => {
  const refreshTime: any = cookiejs.get('refreshTime')
  const isOver10Mins = refreshTime && Math.floor(Date.now() / 1000) - refreshTime >= 600

  if (isOver10Mins) {
    const refreshToken: any = cookiejs.get('refreshToken')

    if (refreshToken) {
      reqConfig.headers.RefreshToken = refreshToken
    }
  }
}
