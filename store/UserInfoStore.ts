import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $api } from '@/utils/apiForStore'
import { User } from '@/interfaces/User'
@Module({
  stateFactory: true,
  namespaced: true,
})
export default class UserInfoStore extends VuexModule {
  public userInfo: User.Info | null = null

  @Mutation
  public setUserInfo(userInfo: User.Info) {
    this.userInfo = userInfo
  }

  @Action({ rawError: true })
  public async init() {
    const userInfo = await $api.getUserInfo()
    this.context.commit('setUserInfo', userInfo)
  }
}
