
import Vue from "vue"
import { gAlertStore } from "~/store";

declare module 'vue/types/vue' {
    interface Vue {
        $alert(type: string, msg: string): void
    }
}

Vue.prototype.$alert = (type: string, msg: string) => {
    gAlertStore.sendAlert({ type, msg })
}
