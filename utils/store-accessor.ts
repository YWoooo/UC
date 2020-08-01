import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import GAlert from '~/store/GAlertStore'
import LayoutStore from '~/store/LayoutStore'

let gAlertStore: GAlert
let layoutStore: LayoutStore

function initialiseStores(store: Store<any>): void {
    gAlertStore = getModule(GAlert, store)
    layoutStore = getModule(LayoutStore, store)
}

export { initialiseStores, gAlertStore, layoutStore }
