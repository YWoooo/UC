import { Plugin, Context } from '@nuxt/types'
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

export const injectApis: Plugin = (context, inject) => {
  const axiosWithApis = initAxios(context)
  inject('api', axiosWithApis)
}

export const initAxios = (context: Context) => {
  /**
   * Seems like there's some type bugs about $axios.create, 
   * which's not fixed since Sep 24, 2020, 
   * so I use any for now, like @kevinmarrec suggestted.
   * See https://github.com/nuxt/typescript/issues/447
   * Last time checked: Jan 11, 2021.
   */
  const axios: any = context.$axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })
  axios.onRequest((config: AxiosRequestConfig) => onRequest(config, context.app))
  axios.onResponse((res: AxiosResponse) => onResponseSuccess(res, context.app))
  axios.onResponseError((err: AxiosError) => onResponseErr(err))
  const axiosWithApis = registApisForAxios(axios)
  return axiosWithApis
}

function registApisForAxios(axios: any) {
  const apiNames = Object.keys(apis)

  const reducer = (apiObjs: any, apiName: string) => {
    const apiObj = apis[apiName](axios)
    return { ...apiObjs, ...apiObj }
  }

  const axiosWithApis = apiNames.reduce(reducer, {})
  return axiosWithApis
};