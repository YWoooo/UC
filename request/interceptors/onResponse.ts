import { AxiosResponse, AxiosError } from 'axios'
import { theMessageStore } from "~/store";
import { errMsggs } from '../configs/errMsgs'

export const onResponseSuccess = (res: AxiosResponse) => res

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
  const content = errMsggs[code] || errMsggs[0]
  theMessageStore.sendMsg({
    content,
    type: 'error'
  })
  throw new Error(code + '')
}
