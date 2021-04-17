import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
type Cb = Function

@Module({
  name: 'TheAuthStore',
  stateFactory: true,
  namespaced: true,
})
export default class TheAuthStore extends VuexModule {
  public isShow = false
  public isPass: boolean | null = null
  public valicode = ''
  public cb: Cb | null = null

  public get isDisabled() {
    return !(this.valicode?.length === 6)
  }

  @Mutation
  public askAuth(cb: Cb) {
    this.isShow = true
    this.cb = cb
  }

  @Action
  public onPass() {
    if (this.cb) {
      this.cb()
    }
    this.closeAuth()
    this.reset()
  }

  @Mutation
  public closeAuth() {
    this.isShow = false
  }

  @Mutation
  public setCode(code: string) {
    this.valicode = code
  }

  @Mutation
  public reset() {
    this.valicode = ''
  }
}
