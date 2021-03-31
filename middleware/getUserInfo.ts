import { Middleware } from '@nuxt/types'

const getUserInfo: Middleware = async ({ app }) => {
  await app.store?.dispatch('UserInfoStore/init')
}

export default getUserInfo