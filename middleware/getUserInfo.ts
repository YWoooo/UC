import { Middleware } from '@nuxt/types'

// TODO: it trigger when entering every single page.
const getUserInfo: Middleware = async ({ app }) => {
  await app.store?.dispatch('UserInfoStore/init')
}

export default getUserInfo