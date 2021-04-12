import { AxiosResponse, AxiosError } from '@nuxtjs/axios/node_modules/axios'
import { NuxtAppOptions } from '@nuxt/types'
import { theMessageStore } from "~/store";
import { errMsggs } from '../configs/errMsgs'
// Change cookiejs into cookie-universal-nuxt now.
import cookiejs from 'cookiejs'

export const onResponseSuccess = (res: AxiosResponse, app: NuxtAppOptions) => {
  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  }
  if (res.headers.accesstoken) {
    app.$cookies.set('accessToken', res.headers.accesstoken, options)
  }
  if (res.headers.refreshtoken) {
    app.$cookies.set('refreshToken', res.headers.refreshtoken, options)
    app.$cookies.set('refreshTime', Math.floor(Date.now() / 1000) + '', options)
  }
  return res.data
}

export const onResponseErr = (err: AxiosError) => {
  const isPublicErr = err.response?.data.error.isPublic || false
  if (isPublicErr) {
    return err.response // Public error should be handle by each caller itself.
  }
  const codeFromData = err.response?.data?.code
  const statusCode = err.response?.status
  const code: number = codeFromData || statusCode || 0
  if (code === 401) {
    return on401()
  }
  onOthers(code)
}

const on401 = () => {
  cookiejs.remove('accessToken')
  cookiejs.remove('refreshToken')
  window.location.replace('/login')
}

const onOthers = (code: number) => {
  const content = `${errMsggs[code] || errMsggs[0]} (code ${code})`
  theMessageStore.sendMsg({
    content,
    type: 'error'
  })
  throw new Error(code + '')
}
