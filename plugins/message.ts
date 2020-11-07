
import Vue from "vue"
import { theMessageStore } from "~/store";
import { MsgType } from '@/interfaces/TheMessage.ts'

declare module 'vue/types/vue' {
  interface Vue {
    $message(msg: string, msgType?: MsgType): void
  }
}

Vue.prototype.$message = (msg: string, msgType: MsgType = 'success'): void => {
  theMessageStore.sendMsg({ msg, msgType })
}
