import { Middleware } from '@nuxt/types'

const checkIsLogin: Middleware = ({ app, redirect }) => {
  const refreshToken = app.$cookies.get('refreshToken')
  if (!refreshToken) {
    return redirect('/login')
  }
}

export default checkIsLogin