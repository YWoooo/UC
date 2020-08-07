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
  </v-app>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import DefaultAppBar from "@/components/layouts/DefaultAppBar.vue";
import DefaultBottomNav from "@/components/layouts/DefaultBottomNav.vue";

@Component({
  components: { DefaultBottomNav, DefaultAppBar },
})
export default class defaultLayout extends Vue {}
</script>
<style lang="scss" scoped>
@import "~/assets/styles/index.scss";
.view {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  background-color: $color-bg;
  color: $color-font;
  font-weight: 300;
  letter-spacing: 1.3px;
}
.nuxt {
  flex: 1;
}
</style>
