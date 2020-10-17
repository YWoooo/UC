<template>
  <v-bottom-navigation :value="$route.name" background-color="#19334d">
    <v-btn
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
