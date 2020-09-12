import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import GAlert from '~/store/GAlertStore'
import LayoutStore from '~/store/LayoutStore'
import LoginStore from '~/store/LoginStore'
import RegisterStore from '~/store/RegisterStore'
import DepositStore from '~/store/DepositStore'

let gAlertStore: GAlert
let layoutStore: LayoutStore
let loginStore: LoginStore
let registerStore: RegisterStore
let depositStore: DepositStore

function initialiseStores(store: Store<any>): void {
    gAlertStore = getModule(GAlert, store)
    layoutStore = getModule(LayoutStore, store)
    loginStore = getModule(LoginStore, store)
    registerStore = getModule(RegisterStore, store)
    depositStore = getModule(DepositStore, store)
}

export {
    initialiseStores,
    gAlertStore,
    layoutStore,
    loginStore,
    registerStore,
    depositStore,
}
