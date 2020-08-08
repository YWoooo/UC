<template>
  <v-app-bar class="app-bar" color="#19334d" dense dark>
    <v-icon class="back" @click="back">mdi-arrow-left</v-icon>
    <v-toolbar-title>
      <span class="title">{{ title }}</span>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { INameOfRoutes, nameOfRoutes } from "./defaultAppBarData";
@Component
export default class DefaultAppBar extends Vue {
  public nameOfRoutes = nameOfRoutes;
  public get title() {
    return this.$route.name
      ? nameOfRoutes[this.$route.name.replace("-", "") as keyof INameOfRoutes]
      : "";
  }
  public back() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/index.scss";
.app-bar {
  flex: 0;
}
.back {
  margin-right: 12px;
}
.title {
  text-transform: capitalize;
}
</style>
