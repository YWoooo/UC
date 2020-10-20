import { Module, Mutation } from 'vuex-module-decorators'
import PaymentStore from './classes/paymentStore';

@Module({
    name: 'TransferStore',
    stateFactory: true,
    namespaced: true,
})
export default class TransferStore extends PaymentStore {
    public fromAccount = "TEST123"
    public toAccount = "TEST223"

    @Mutation
    public setFromAccount(fromAccount: string) {
        this.fromAccount = fromAccount;
    }
    @Mutation
    public setToAccount(toAccount: string) {
        this.toAccount = toAccount;
    }
}