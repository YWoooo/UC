import { AxiosRequestConfig } from '@nuxtjs/axios/node_modules/axios'

export interface CookiesAboutRequest {
  accessToken: string | undefined
  refreshTime: string | undefined
  refreshToken: string | undefined
}

export const onRequest = (reqConfig: AxiosRequestConfig, cookies: CookiesAboutRequest) => {
  if (cookies.accessToken) {
    setAccessToken(reqConfig, cookies.accessToken)
  }
  if (cookies.refreshTime && cookies.refreshToken) {
    setRefreshToken(reqConfig, cookies.refreshTime, cookies.refreshToken)
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
