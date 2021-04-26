import Vue from "vue"
import { theMessageStore } from "~/store";
import { MsgType } from '@/interfaces/TheMessage'

declare module 'vue/types/vue' {
  interface Vue {
    $message( // TODO: too many params.
      msg: string,
      msgType?: MsgType,
      duration?: number
    ): void
  }
}

Vue.prototype.$message = (
  content: string,
  type: MsgType = 'success',
  duration = 6000
): void => {
  theMessageStore.sendMsg({ content, type, duration })
}
