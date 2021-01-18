import { Plugin } from '@nuxt/types'
import { AxiosRequestConfig, AxiosResponse, AxiosError } from '@nuxtjs/axios/node_modules/axios'
import { onRequest, CookiesAboutRequest } from './interceptors/onRequest'
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

export const api: Plugin = ({ $axios, app }, inject) => {
  /**
   * Seems like there's some type bugs about $axios.create, 
   * which's not fixed since Sep 24, 2020, 
   * so I use any for now, like @kevinmarrec suggestted.
   * See https://github.com/nuxt/typescript/issues/447
   * Last time checked: Jan 11, 2021.
   */
  const axios: any = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })
  const cookies: CookiesAboutRequest = {
    accessToken: app.$cookies.get('accessToken'),
    refreshTime: app.$cookies.get('refreshTime'),
    refreshToken: app.$cookies.get('refreshToken')
  }

  axios.setBaseURL('http://localhost:3001')
  axios.onRequest((config: AxiosRequestConfig) => onRequest(config, cookies))
  axios.onResponse((res: AxiosResponse) => onResponseSuccess(res))
  axios.onResponseError((err: AxiosError) => onResponseErr(err))

  const api = {
    async login(sendData: any) {
      const res = await axios.$post('/login', sendData)
      return res
    },
    async getUserInfo() {
      const res = await axios.$get('/userInfo')
      return res
    },
  }

  // Inject to context as $api
  inject('api', api)
}