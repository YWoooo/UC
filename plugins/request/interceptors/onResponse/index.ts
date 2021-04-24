import { AxiosResponse } from '@nuxtjs/axios/node_modules/axios'
import { NuxtAppOptions } from '@nuxt/types'

export default (res: AxiosResponse, app: NuxtAppOptions) => {
  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  }
  if (res.headers.accesstoken) {
    app.$cookies.set('accessToken', res.headers.accesstoken, options)
  }
  if (res.headers.refreshtoken) {
    app.$cookies.set('refreshToken', res.headers.refreshtoken, options)
    app.$cookies.set('refreshTime', Math.floor(Date.now() / 1000) + '', options)
  }
  return res.data
}
