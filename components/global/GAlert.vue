<template>
  <v-alert
    v-if="isShow"
    class="v-alert"
    :type="type"
    outlined
    dismissible
    transition="scale-transition"
  >{{msg}}</v-alert>
</template>
<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import { gAlertStore } from "~/store";
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
@import "~/style/index.scss";
.v-alert {
  position: fixed;
  top: 24px;
  width: calc(100% - 32px);
  margin: 0 16px;
}
</style>
