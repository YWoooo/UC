<template>
  <v-bottom-navigation 
    class="bottom-nav"
    :value="$route.name" 
    background-color="#fff">
    <nuxt-link 
      class="btn"
      v-for="item in btnDatas"
      :key="item.label"
      :to="item.path">
      <v-btn>
        <span>{{ item.label }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </nuxt-link>
  </v-bottom-navigation>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class DefaultBottomNav extends Vue {
  public btnDatas = [
    {
      label: "Home",
      icon: "mdi-home",
      path: "/",
    },
    {
      label: "Wallet",
      icon: "mdi-cash-usd",
      path: "/wallet",
    },
    {
      label: "Settings",
      icon: "mdi-cog-outline",
      path: "/settings",
    },
  ];
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/index.scss";
.bottom-nav {
  bottom: 0;
  position: fixed;
}
.btn {
  height: 100%;
}
::v-deep .v-btn__content {
  color: $color-primary;
}
</style>
