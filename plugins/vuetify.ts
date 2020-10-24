import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

const options = {
    /**
     * Disabled: true is basically useless. See https://github.com/vuetifyjs/vuetify/issues/7097
     * 'Unfortunately this is not functionality that we are looking to implement at this time.'
     * Fucking white trash.
     */
    // theme: { disable: true },
    theme: {
        themes: {
            light: {
                primary: '#0a1e3d',
                error: '#db351f',
            },
        },
    },
}

export default new Vuetify(options)