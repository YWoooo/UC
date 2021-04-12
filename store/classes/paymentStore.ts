import { VuexModule, Mutation, Module } from 'vuex-module-decorators'

@Module({
    stateFactory: true,
    namespaced: true,
})
export default class PaymentStore extends VuexModule {
    public amount = 0;
    public isBtnLoading = false

    public get isBtnDisabled() {
        return this.isBtnLoading || this.amount <= 0;
    }

    @Mutation
    public setAmount(value: number) {
        this.amount = value
    }
    @Mutation
    public setIsBtnLoading(isBtnLoading: boolean) {
        this.isBtnLoading = isBtnLoading
    }
    @Mutation
    public reset() {
        this.amount = 0
        this.isBtnLoading = false
    }
}
