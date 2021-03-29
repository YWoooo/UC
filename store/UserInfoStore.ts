import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { User } from '@/interfaces/User'

@Module({
  // name: 'UserInfoStore',
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
  public initUserInfo(userInfo: User.Info) {
    this.context.commit('setUserInfo', userInfo)
  }
}
