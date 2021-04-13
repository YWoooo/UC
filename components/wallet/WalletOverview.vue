<template>
  <div class="overview">
    <div class="balance-value">{{ balanceText }}</div>
    <div class="balance-key">Balance (USD)</div>
  </div>
</template>
<script lang="ts">

import { Component, Vue } from "nuxt-property-decorator";
import formatter from '@/utils/formatter';

@Component
export default class WalletCard extends Vue {
  public formatter = formatter;

  public get userInfo() {
    return this.$store.state.UserInfoStore.userInfo
  }
  public get cardData() {
    return {
      balance: this.userInfo?.balance || 0
    }
  }
  public get balanceText() {
    return this.formatter.number(this.cardData.balance, true)
  }
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
