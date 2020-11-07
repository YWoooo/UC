<template>
  <v-alert
    v-if="isShow"
    class="the-message"
    :type="msgType"
    dense
    text
    transition="scroll-y-transition"
  >{{msg}}</v-alert>
</template>

<script lang='ts'>
import { Component, Vue } from "nuxt-property-decorator";
import { theMessageStore } from "~/store";

/**
 * TODO: second alert bug.
 * 1. User send a alert.
 * 2. User send another alert.
 * 3. Since the first one still visible on the screen, the animation won't launch again.
 * 4. Just msg change.
 */

@Component
export default class TheMessage extends Vue {
  private get msgType() {
    return theMessageStore.msgType;
  }
  private get msg() {
    return theMessageStore.msg;
  }
  private get isShow() {
    return theMessageStore.isShow;
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.the-message {
  border-radius: 0;
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
