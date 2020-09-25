
import Vue from "vue"
import { gAlertStore } from "~/store";
import { TheAlertType } from '@/interfaces/IGAlert.ts'

declare module 'vue/types/vue' {
    interface Vue {
        $alert(type: string, msg: string): void
    }
}

Vue.prototype.$alert = (type: TheAlertType, msg: string) => {
    gAlertStore.sendAlert({ type, msg })
}
