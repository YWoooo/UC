import { Middleware } from '@nuxt/types'

const getUserInfo: Middleware = async ({ app }) => {
  const userInfo = await app.$api.getUserInfo()
  if (userInfo) {
    app.store?.dispatch('UserInfoStore/initUserInfo', userInfo)
  }
}

export default getUserInfo