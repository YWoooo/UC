<template>
  <v-bottom-navigation 
    class="bottom-nav"
    :value="$route.name" 
    background-color="#fff">
    <v-btn
      class="btn"
      v-for="item in btnDatas"
      :key="item.label"
      @click="goTo(item.url)"
    >
      <span>{{ item.label }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
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
      path: "/home",
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
  public goTo(url: string) {
    this.$router.push(url);
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/index.scss";
.bottom-nav {
  bottom: 0;
  position: fixed;
}
::v-deep .v-btn__content {
  color: $color-primary;
}
</style>
