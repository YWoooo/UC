import { Plugin, NuxtAppOptions } from '@nuxt/types'
import { AxiosRequestConfig, AxiosResponse, AxiosError } from '@nuxtjs/axios/node_modules/axios'
import { onRequest } from './interceptors/onRequest'
import { onResponseSuccess, onResponseErr } from './interceptors/onResponse'
import apis from './apis/index'

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

  axios.setBaseURL('http://localhost:3001')
  axios.onRequest((config: AxiosRequestConfig) => onRequest(config, app))
  axios.onResponse((res: AxiosResponse) => onResponseSuccess(res, app))
  axios.onResponseError((err: AxiosError) => onResponseErr(err))

  const api = registingApis(axios)
  inject('api', api)
}

function registingApis(axios: any) {
  const apiNames = Object.keys(apis)

  const reducer = (apiObjs: any, apiName: string) => {
    const apiObj = apis[apiName](axios)
    return { ...apiObjs, ...apiObj }
  }

  return apiNames.reduce(reducer, {})
};