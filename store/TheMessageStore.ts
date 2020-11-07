import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { MsgType, MessageOptions } from '@/interfaces/TheMessage';

@Module({
  name: 'TheMessageStore',
  stateFactory: true,
  namespaced: true,
})
export default class TheMessageStore extends VuexModule {
  public msg = ''
  public msgType: MsgType = 'success'
  public isShow = false
  @Mutation
  setIsShow(val: boolean) {
    this.isShow = val
  }
  @Mutation
  setMsg(options: MessageOptions) {
    this.msg = options.msg
    this.msgType = options.msgType
  }
  @Action
  sendMsg(options: MessageOptions) {
    this.context.commit('setMsg', options)
    this.context.commit('setIsShow', true)
    setTimeout(() => this.context.commit('setMsg', false), 4000);
  }
}
