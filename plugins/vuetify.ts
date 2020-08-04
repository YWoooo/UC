import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

const opts = {
    /**
     * This is basically useless. See https://github.com/vuetifyjs/vuetify/issues/7097
     * 'Unfortunately this is not functionality that we are looking to implement at this time.'
     * Fucking white trash.
     */
    // theme: { disable: true },
}

export default new Vuetify(opts)