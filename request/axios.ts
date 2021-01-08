import { Context } from '@nuxt/types'
import { AxiosRequestConfig } from '@nuxtjs/axios/node_modules/axios'
import { onRequest } from './interceptors/onRequest'

export default function ({ $axios }: Context) {
  $axios.onRequest((config: AxiosRequestConfig) => onRequest(config))
}