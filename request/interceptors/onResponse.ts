import { AxiosResponse, AxiosError } from '@nuxtjs/axios/node_modules/axios'
import { NuxtAppOptions } from '@nuxt/types'
import { theMessageStore } from "~/store";
import { errMsggs } from '../configs/errMsgs'
// Change cookiejs into cookie-universal-nuxt now.
import cookiejs from 'cookiejs'

export const onResponseSuccess = (res: AxiosResponse, app: NuxtAppOptions) => {
  if (res.headers.accesstoken) {
    app.$cookies.set('accessToken', res.headers.accesstoken)
  }
  if (res.headers.refreshtoken) {
    const options = {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    }
    app.$cookies.set('refreshToken', res.headers.refreshtoken, options)
    app.$cookies.set('refreshTime', Math.floor(Date.now() / 1000) + '', options)
  }
  return res.data
}

export const onResponseErr = (err: AxiosError) => {
  const code: number = err.response?.status || 0
  if (code === 401) {
    return on401()
  }
  if (code === 500) {
    return on500()
  }
  onOthers(code)
}

const on401 = () => {
  cookiejs.remove('accessToken')
  cookiejs.remove('refreshToken')
  window.location.replace('/login')
}

const on500 = () => {
  const content = errMsggs[0]
  theMessageStore.sendMsg({
    content,
    type: 'error'
  })
  throw new Error('500')
}

const onOthers = (code: number) => {
  const content = `${errMsggs[code] || errMsggs[0]} (code ${code})`
  theMessageStore.sendMsg({
    content,
    type: 'error'
  })
  throw new Error(code + '')
}
