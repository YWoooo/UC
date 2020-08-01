<template>
  <v-bottom-navigation :value="$route.name" color="purple lighten-1">
    <v-btn
      v-for="item in btnDatas"
      :key="item.label"
      :value="item.routeName"
      @click="goTo(item.routeName)"
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
      routeName: "home",
    },
    {
      label: "Wallet",
      icon: "mdi-cash-usd",
      routeName: "wallet",
    },
    {
      label: "Settings",
      icon: "mdi-cog-outline",
      routeName: "settings",
    },
  ];
  public goTo(routeName: string) {
    this.$router.push(routeName);
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/styles/index.scss";
</style>
