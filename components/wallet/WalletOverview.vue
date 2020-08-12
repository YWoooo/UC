<template>
  <div class="overview">
    <div class="balance-value">{{ cardData.balance.toFixed(2)}}</div>
    <div class="balance-key">Balance (USD)</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component
export default class WalletCard extends Vue {
  public cardData = {
    balance: 12345.564,
  };
}
</script>
<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.overview {
  margin-top: 36px;
  padding: $normal-spacing;
  text-align: center;
}
.balance-value {
  font-size: 54px;
}
</style>
