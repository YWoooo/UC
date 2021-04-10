import { Module } from 'vuex-module-decorators'
import PaymentStore from './classes/paymentStore';
@Module({
  name: 'DepositStore',
  stateFactory: true,
  namespaced: true,
})
export default class DepositStore extends PaymentStore { }
