import Vue from "vue"
import { theMessageStore } from "~/store";
import { MsgType } from '@/interfaces/TheMessage.ts'

declare module 'vue/types/vue' {
  interface Vue {
    $message(msg: string, msgType?: MsgType): void
  }
}

Vue.prototype.$message = (content: string, type: MsgType = 'success'): void => {
  theMessageStore.sendMsg({ content, type })
}
