import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import GAlert from '~/store/GAlertStore'

let gAlertStore: GAlert

function initialiseStores(store: Store<any>): void {
    gAlertStore = getModule(GAlert, store)
}

export { initialiseStores, gAlertStore }
