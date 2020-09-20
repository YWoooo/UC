<template>
  <v-app>
    <div class="view">
      <DefaultAppBar />
      <div class="nuxt">
        <nuxt />
      </div>
      <DefaultBottomNav />
    </div>
    <GAlert />
    <TheAuth />
  </v-app>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import DefaultAppBar from "@/components/layouts/DefaultAppBar.vue";
import DefaultBottomNav from "@/components/layouts/DefaultBottomNav.vue";
import TheAuth from "@/components/global/the-auth/index.vue";

@Component({ components: { DefaultBottomNav, DefaultAppBar, TheAuth } })
export default class defaultLayout extends Vue {}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/index.scss";
.view {
  background-color: $color-bg;
  color: $color-font;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  justify-content: space-between;
  letter-spacing: 1.3px;
  min-height: 100%;
}
.nuxt {
  flex: 1;
}
</style>
