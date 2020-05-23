import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import IGAlert from '@/interfaces/IGAlert'

@Module({
    name: 'GAlertStore',
    stateFactory: true,
    namespaced: true,
})
export default class GAlertStore extends VuexModule {
    public type = 'error'
    public msg = 'this is a g alert store wolalala'
    public isShow = false
    @Mutation
    close() {
        this.isShow = false
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
        setTimeout(() => this.context.commit('close'), 8000);
    }
}
