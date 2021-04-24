import cookiejs from 'cookiejs'
import { AxiosError } from '@nuxtjs/axios/node_modules/axios'

export default (error: AxiosError) => {
  const status = error.response?.status
  switch (status) {
    case 401:
      on401()
      break
    default:
      treatAsSystemError()
      break
  }
  throw error
}

const on401 = () => {
  cookiejs.remove('accessToken')
  cookiejs.remove('refreshToken')
  window.location.replace('/login')
}
const treatAsSystemError = () => {
  window.$nuxt.$message(
    'System error occurred, please contact us.',
    'error'
  )
}
