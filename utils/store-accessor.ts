import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import GAlert from '~/store/GAlertStore'
import TheAuthStore from '~/store/TheAuthStore'
import LayoutStore from '~/store/LayoutStore'
import LoginStore from '~/store/LoginStore'
import RegisterStore from '~/store/RegisterStore'
import DepositStore from '~/store/DepositStore'
import WithdrawalStore from '~/store/WithdrawalStore'
import TransferStore from '~/store/TransferStore'

let gAlertStore: GAlert
let theAuthStore: TheAuthStore
let layoutStore: LayoutStore
let loginStore: LoginStore
let registerStore: RegisterStore
let depositStore: DepositStore
let withdrawalStore: WithdrawalStore
let transferStore: TransferStore

function initialiseStores(store: Store<any>): void {
    gAlertStore = getModule(GAlert, store)
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
    gAlertStore,
    theAuthStore,
    layoutStore,
    loginStore,
    registerStore,
    depositStore,
    withdrawalStore,
    transferStore
}
