import { VuexModule, Mutation } from 'vuex-module-decorators'

export default class PaymentStore extends VuexModule {
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
