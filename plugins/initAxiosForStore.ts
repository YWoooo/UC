import { Plugin } from '@nuxt/types'
import { initAxiosForStore } from '@/utils/apiForStore'
import { initAxios } from './request/injectApis'

const init: Plugin = (context) => {
  initAxiosForStore(initAxios(context))
}

export default init