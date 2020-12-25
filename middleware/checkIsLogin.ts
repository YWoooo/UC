import { Middleware } from '@nuxt/types'

const checkIsLogin: Middleware = ({ app, redirect }) => {
  const token = app.$cookies.get('token')
  if (!token) {
    return redirect('/login')
  }
}

export default checkIsLogin