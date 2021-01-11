import { Context } from '@nuxt/types'
import { AxiosRequestConfig, AxiosResponse, AxiosError } from '@nuxtjs/axios/node_modules/axios'
import { onRequest } from './interceptors/onRequest'
import { onResponseSuccess, onResponseErr } from './interceptors/onResponse'

export default function ({ $axios }: Context) {
  $axios.onRequest((config: AxiosRequestConfig) => onRequest(config))
  $axios.onResponse((res: AxiosResponse) => onResponseSuccess(res))
  $axios.onResponseError((err: AxiosError) => onResponseErr(err))
}
