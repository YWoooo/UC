import { AxiosResponse, AxiosError } from 'axios'
import { theMessageStore } from "~/store";
import { errMsggs } from '../configs/errMsgs'

export const onResponseSuccess = (res: AxiosResponse) => res

export const onResponseErr = (err: AxiosError) => {
  const code = err.response?.data.code
  if (code === 401) {
    return on401()
  }
  onOthers(code)
}

const on401 = () => {
  throw new Error('401')
}

const onOthers = (code: number) => {
  const content = errMsggs[code] || errMsggs[0]
  theMessageStore.sendMsg({
    content,
    type: 'error'
  })
  throw new Error(code + '')
}
