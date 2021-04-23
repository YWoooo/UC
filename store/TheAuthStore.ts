import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
@Module({
  name: 'TheAuthStore',
  stateFactory: true,
  namespaced: true,
})
export default class TheAuthStore extends VuexModule {
  public isShow = false
  public valicode = ''

  public get canSubmit() {
    return this.valicode?.length === 6
  }

  @Mutation
  public askAuth() {
    this.isShow = true
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
