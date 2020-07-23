import Vue from 'vue'
import GAlert from '~/components/global/GAlert.vue';

const components = { GAlert }

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})