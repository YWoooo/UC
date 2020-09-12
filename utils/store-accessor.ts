import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import GAlert from '~/store/GAlertStore'
import LayoutStore from '~/store/LayoutStore'
import LoginStore from '~/store/LoginStore'
import DepositStore from '~/store/DepositStore'

let gAlertStore: GAlert
let layoutStore: LayoutStore
let loginStore: LoginStore
let depositStore: DepositStore

function initialiseStores(store: Store<any>): void {
    gAlertStore = getModule(GAlert, store)
    layoutStore = getModule(LayoutStore, store)
    loginStore = getModule(LoginStore, store)
    depositStore = getModule(DepositStore, store)
}

export {
    initialiseStores,
    gAlertStore,
    layoutStore,
    loginStore,
    depositStore,
}
