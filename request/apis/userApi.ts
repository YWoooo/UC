export default function userApi(axios: any) {
  return {
    async getUserInfo() {
      return await axios.$get('/userInfo')
    }
  }
}
