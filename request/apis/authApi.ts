export default function authApi(axios: any) {
  return {
    async login(sendData: any) {
      const res = await axios.$post('/login', sendData)
      return res
    }
  }
}
