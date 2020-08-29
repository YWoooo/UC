<template>
  <div class>
    <div class="menu">
      <nuxt-link v-for="item in menu1Data" :key="item.label" :to="{name: item.routeName}">
        <div class="menu-item">
          <span>{{item.label}}</span>
          <v-icon class="icon">mdi-arrow-right</v-icon>
        </div>
      </nuxt-link>
    </div>
    <div class="menu">
      <nuxt-link v-for="item in menu2Data" :key="item.label" :to="{name: item.routeName}">
        <div class="menu-item">
          <span>{{item.label}}</span>
          <v-icon class="icon">mdi-arrow-right</v-icon>
        </div>
      </nuxt-link>
    </div>
    <div class="menu">
      <nuxt-link v-for="item in menu3Data" :key="item.label" :to="{name: item.routeName}">
        <div class="menu-item">
          <span>{{item.label}}</span>
          <v-icon class="icon">mdi-arrow-right</v-icon>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { menu1Data, menu2Data, menu3Data } from "./walletMenuData";
@Component
export default class WalletMenu extends Vue {
  public menu1Data = menu1Data;
  public menu2Data = menu2Data;
  public menu3Data = menu3Data;
}
</script>
<style lang='scss' scoped>
@import '~/assets/styles/index.scss';

.menu {
  margin: 0 $normal-spacing;

  & + & {
    margin-top: 24px;
  }
}

.menu-item {
  background: $color-bg-darker;
  border-radius: 4px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  margin-bottom: 4px;
  padding: 8px 12px;
  width: 100%;
}

.icon {
  color: inherit;
  opacity: 0.7;
}
</style>
