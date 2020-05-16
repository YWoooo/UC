import { Plugin } from '@nuxt/types'
import apis from '../request/api/index'

declare module 'vue/types/vue' {
  interface Vue {
    $api: any;
  }
}
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $api: any;
  }
}
declare module 'vuex/types/index' {
  interface Store<S> {
    $api: any;
  }
}

const api: Plugin = (context, inject) => {
  inject('api', apis)
}
export default api
