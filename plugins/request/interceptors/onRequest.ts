import { AxiosRequestConfig } from '@nuxtjs/axios/node_modules/axios'
import { NuxtAppOptions } from '@nuxt/types'

export const onRequest = (reqConfig: AxiosRequestConfig, app: NuxtAppOptions) => {
  const accessToken = app.$cookies.get('accessToken')
  if (accessToken) {
    setAccessToken(reqConfig, accessToken)
  }
  const refreshTime = app.$cookies.get('refreshTime')
  const refreshToken = app.$cookies.get('refreshToken')
  if (refreshTime && refreshToken) {
    setRefreshToken(reqConfig, refreshTime, refreshToken)
  }
  return reqConfig
}

const setAccessToken = (reqConfig: AxiosRequestConfig, accessToken: string) => {
  reqConfig.headers.Authorization = 'Bearer ' + accessToken
}

const setRefreshToken = (reqConfig: AxiosRequestConfig, refreshTime: string, refreshToken: string) => {
  const isOver10Mins = Math.floor(Date.now() / 1000) - +refreshTime >= 600
  if (isOver10Mins) {
    reqConfig.headers.RefreshToken = refreshToken
  }
}
