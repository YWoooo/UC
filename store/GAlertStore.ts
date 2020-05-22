import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import IGAlert from '@/interfaces/IGAlert'

@Module({
    name: 'GAlertStore',
    stateFactory: true,
    namespaced: true,
})
export default class GAlertStore extends VuexModule {
    type = 'info'
    msg = 'this is a g alert store wolalala'
    isShow = false
    @Mutation
    toggleAlert() {
        this.isShow = !this.isShow
    }
    @Mutation
    setAlert(options: IGAlert) {
        this.type = options.type
        this.msg = options.msg
        this.isShow = true
    }
    @Action
    sendAlert(options: IGAlert) {
        this.context.commit('setAlert', options)
        setTimeout(() => this.context.commit('toggleAlert'), 3000);
    }
}
