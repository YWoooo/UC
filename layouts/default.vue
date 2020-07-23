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
import GAlert from "@/components/global/GAlert.vue";

@Component({
  components: {
    GAlert
  }
})
export default class defaultLayout extends Mixins(checkLogin) {
  private created() {
    this.checkLogin();
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
a {
  text-decoration: none;
}
a:active,
a:link,
a:visited {
  color: inherit;
}
</style>
