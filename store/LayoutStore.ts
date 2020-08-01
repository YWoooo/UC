/**
 * A store for UI of layout.
 */

import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
    name: 'LayoutStore',
    stateFactory: true,
    namespaced: true,
})
export default class LayoutStore extends VuexModule {
    public isMenuShow = false;
    @Mutation
    toggleMenu() {
        this.isMenuShow = !this.isMenuShow
    }
}
