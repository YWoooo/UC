import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
    name: 'DepositStore',
    stateFactory: true,
    namespaced: true,
})
export default class DepositStore extends VuexModule {
    public amount = 0;
    public get isBtnDisabled() {
        return this.amount <= 0;
    }
    public get isBtnLoading() {
        return false
    }
    @Mutation
    public setAmount(value: number) {
        this.amount = value
    }
}
