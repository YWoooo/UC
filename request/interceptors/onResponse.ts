import { AxiosResponse, AxiosError } from '@nuxtjs/axios/node_modules/axios'
import { theMessageStore } from "~/store";
import { errMsggs } from '../configs/errMsgs'
import cookiejs from 'cookiejs'

export const onResponseSuccess = (res: AxiosResponse) => {
  if (res.headers.accesstoken) {
    cookiejs.set('accessToken', res.headers.accesstoken)
  }
  if (res.headers.refreshtoken) {
    cookiejs.set('refreshToken', res.headers.refreshtoken)
    cookiejs.set('refreshTime', Math.floor(Date.now() / 1000) + '')
  }
  return res.data.data
}

export const onResponseErr = (err: AxiosError) => {
  const code = err.response?.data.code
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
