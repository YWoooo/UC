<template>
  <v-app>
    <div class="view">
      <DefaultAppBar />
      <div class="nuxt">
        <nuxt />
      </div>
      <DefaultBottomNav />
    </div>
    <TheMessage />
    <TheAuth />
  </v-app>
</template>

<script lang='ts'>
import { Component, Vue } from "nuxt-property-decorator";
import DefaultAppBar from "@/components/layouts/DefaultAppBar.vue";
import DefaultBottomNav from "@/components/layouts/DefaultBottomNav.vue";
import TheMessage from "@/components/global/the-message/index.vue";
import TheAuth from "@/components/global/the-auth/index.vue";

@Component({ components: { DefaultAppBar, DefaultBottomNav, TheMessage, TheAuth } })
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/index.scss";
.view {
  background-color: $color-background;
  color: $color-font-normal;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  justify-content: space-between;
}
.nuxt {
  flex: 1;
  height: calc(100vh - 48px - 56px); // 48px & 56px as the height of DefaultAppBar & DefaultBottomNav.
  overflow: scroll;
}
</style>
