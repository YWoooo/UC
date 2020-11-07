import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import TheMessageStore from '~/store/TheMessageStore'
import TheAuthStore from '~/store/TheAuthStore'
import LayoutStore from '~/store/LayoutStore'
import LoginStore from '~/store/LoginStore'
import RegisterStore from '~/store/RegisterStore'
import DepositStore from '~/store/DepositStore'
import WithdrawalStore from '~/store/WithdrawalStore'
import TransferStore from '~/store/TransferStore'

let theMessageStore: TheMessageStore;
let theAuthStore: TheAuthStore
let layoutStore: LayoutStore
let loginStore: LoginStore
let registerStore: RegisterStore
let depositStore: DepositStore
let withdrawalStore: WithdrawalStore
let transferStore: TransferStore

function initialiseStores(store: Store<any>): void {
  theMessageStore = getModule(TheMessageStore, store);
  theAuthStore = getModule(TheAuthStore, store)
  layoutStore = getModule(LayoutStore, store)
  loginStore = getModule(LoginStore, store)
  registerStore = getModule(RegisterStore, store)
  depositStore = getModule(DepositStore, store)
  withdrawalStore = getModule(WithdrawalStore, store)
  transferStore = getModule(TransferStore, store)
}

export {
  initialiseStores,
  theMessageStore,
  theAuthStore,
  layoutStore,
  loginStore,
  registerStore,
  depositStore,
  withdrawalStore,
  transferStore
}
