import onPublicCustomError from './onPublicCustomError';
import treatAsHttpError from './treatAsHttpError';
import { AxiosError } from '@nuxtjs/axios/node_modules/axios'
import { Global } from '@/interfaces/Global'

export default (error: AxiosError) => {
  const customError =
    error.response?.data.error as Global.Error || undefined
  const isPublicCustomError =
    customError?.isPublic === true

  if (isPublicCustomError) {
    onPublicCustomError(customError)
    return error.response // In case we need to do something else in page.
  }
  treatAsHttpError(error)
}
