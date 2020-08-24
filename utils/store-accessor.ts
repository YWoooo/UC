import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import GAlert from '~/store/GAlertStore'
import LayoutStore from '~/store/LayoutStore'
import DepositStore from '~/store/DepositStore'

let gAlertStore: GAlert
let layoutStore: LayoutStore
let depositStore: DepositStore

function initialiseStores(store: Store<any>): void {
    gAlertStore = getModule(GAlert, store)
    layoutStore = getModule(LayoutStore, store)
    depositStore = getModule(DepositStore, store)
}

export {
    initialiseStores,
    gAlertStore,
    layoutStore,
    depositStore
}
