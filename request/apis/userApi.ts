export default function userApi(axios: any) {
  return {
    async getUserInfo() {
      const res = await axios.$get('/userInfo')
      return res
    }
  }
}
