import Vue from "vue"
import formatter from "@/utils/formatter";

declare module 'vue/types/vue' {
  interface Vue {
    $formatter: typeof formatter
  }
}

Vue.prototype.$formatter = formatter
