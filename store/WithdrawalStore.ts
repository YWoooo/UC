import { Module } from 'vuex-module-decorators'
import PaymentStore from './classes/paymentStore';

@Module({
    name: 'WithdrawalStore',
    stateFactory: true,
    namespaced: true,
})
export default class WithdrawalStore extends PaymentStore { }
