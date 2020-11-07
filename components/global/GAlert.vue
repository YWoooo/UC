<template>
  <v-alert
    v-if="isShow"
    class="v-alert"
    :type="type"
    dense
    text
    transition="scroll-y-transition"
  >{{msg}}</v-alert>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import { gAlertStore } from "~/store";

/**
 * TODO: second alert bug.
 * 1. User send a alert.
 * 2. User send another alert.
 * 3. Since the first one still visible on the screen, the animation won't launch again.
 * 4. Just msg change.
 */

@Component
export default class GAlert extends Vue {
  private get type() {
    return gAlertStore.type;
  }
  private get msg() {
    return gAlertStore.msg;
  }
  private get isShow() {
    return gAlertStore.isShow;
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.v-alert {
  border-radius: 0;
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
