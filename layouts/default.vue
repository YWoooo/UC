<template>
  <v-app>
    <div>
      <nuxt />
    </div>
    <GAlert />
  </v-app>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Mixins } from "vue-property-decorator";
import checkLogin from "@/mixins/checkLogin.vue";

@Component
export default class defaultLayout extends Mixins(checkLogin) {
  private created() {
    this.checkLogin();
  }
}
</script>
