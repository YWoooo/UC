import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
@Module({
  stateFactory: true,
  namespaced: true,
})
export default class AccessStore extends VuexModule {
  public access: Access = {
    'wallet-deposit': true,
    'wallet-deposit-success': false,
    'wallet-withdrawal': true,
    'wallet-withdrawal-success': false,
    'wallet-transfer': true,
    'wallet-transfer-success': false,
  }

  @Mutation
  public checkAccess() {
    const routeName = window.$nuxt.$route.name
    const noAccess = routeName && !this.access[routeName]
    if (noAccess) {
      window.$nuxt.$router.back()
    }
    /**
     * No access is an exception only. 
     * I mean, since the real safety check has already been done, and meanful only, in backend,
     * it's not so necessary to do shch a strick access check.
     * 
     * Access check here is more about UI & UX concerning,
     * like when the page using $route.param yet no param on url, or sending a request would be block by backend api, would be bad for UX,
     * not safety.
     */
  }

  @Mutation
  public enable(page: keyof Access) {
    this.access[page] = true
  }
  @Mutation
  public disable(page: keyof Access) {
    this.access[page] = false
  }

  @Mutation
  public storeAccessToSession() {
    const access = JSON.stringify(this.access)
    sessionStorage.setItem('access', access)
  }
  @Mutation
  public getAccessFromSession() {
    const access = sessionStorage.getItem('access')
    if (access) {
      this.access = JSON.parse(access)
    }
  }
}
interface Access {
  [key: string]: boolean
}
