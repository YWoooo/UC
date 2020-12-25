import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Msg } from '@/interfaces/TheMessage';

@Module({
  name: 'TheMessageStore',
  stateFactory: true,
  namespaced: true,
})
export default class TheMessageStore extends VuexModule {
  public msgs: Msg[] = [];
  public duration = 2000;
  @Mutation
  setMsg(msg: Msg) {
    this.msgs.push(msg)
  }
  @Mutation
  disappearMsg() {
    this.msgs.shift()
  }
  @Action
  sendMsg(msg: Msg) {
    this.context.commit('setMsg', msg)
    setTimeout(() => this.context.commit('disappearMsg'), this.duration);
  }
}
