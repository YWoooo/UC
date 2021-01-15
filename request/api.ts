import { Plugin } from '@nuxt/types'
import { AxiosRequestConfig, AxiosResponse, AxiosError } from '@nuxtjs/axios/node_modules/axios'
import { onRequest } from './interceptors/onRequest'
import { onResponseSuccess, onResponseErr } from './interceptors/onResponse'

declare module 'vue/types/vue' {
  interface Vue {
    $api: any
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $api: any
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $api: any
  }
}

export const api: Plugin = ({ $axios }, inject) => {
  /**
   * Seems like there's some type bugs about $axios.create, 
   * which's not fixed since Sep 24, 2020, 
   * so I use any for now, like @kevinmarrec suggestted.
   * See https://github.com/nuxt/typescript/issues/447
   * Last time checked: Jan 11, 2021.
   */
  const api: any = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })

  api.setBaseURL('http://localhost:3001')
  api.onRequest((config: AxiosRequestConfig) => onRequest(config))
  api.onResponse((res: AxiosResponse) => onResponseSuccess(res))
  api.onResponseError((err: AxiosError) => onResponseErr(err))

  // Inject to context as $api
  inject('api', api)
}