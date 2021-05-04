import { Module, Mutation } from 'vuex-module-decorators'
import PaymentStore from './classes/paymentStore';

@Module({
    name: 'TransferStore',
    stateFactory: true,
    namespaced: true,
})
export default class TransferStore extends PaymentStore {
    public fromAccount = ""
    public toAccount = ""

    public get isBtnDisabled() {
        return this.isBtnLoading || this.amount <= 0 || !this.toAccount;
    }

    @Mutation
    public setFromAccount(fromAccount: string) {
        this.fromAccount = fromAccount;
    }
    @Mutation
    public setToAccount(toAccount: string) {
        this.toAccount = toAccount;
    }
}
