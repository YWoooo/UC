import { Global } from '@/interfaces/Global'

export default (error: Global.Error) => {
  switch (error.name) {
    case ('WrongVerifycodeError'):
      return onWrongVerifycodeError()
    default:
      return
  }
}

const onWrongVerifycodeError = () => {
  window.$nuxt.$message(
    'Please input the right code.',
    'error'
  )
}