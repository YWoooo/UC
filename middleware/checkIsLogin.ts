import { Middleware } from '@nuxt/types'

const checkIsLogin: Middleware = ({ app, redirect }) => {
  const accessToken = app.$cookies.get('accessToken')
  if (!accessToken) {
    return redirect('/login')
  }
}

export default checkIsLogin