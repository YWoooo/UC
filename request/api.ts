import { Plugin } from '@nuxt/types'

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

  // Set baseURL to something different
  api.setBaseURL('http://localhost:3001')

  // Inject to context as $api
  inject('api', api)
}