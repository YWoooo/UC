<template>
  <div class="withdrawal-info">
    <div class="amount" v-if="amount<=0">-</div>
    <div class="amount" v-else>$ {{amount.toLocaleString()}}</div>
    <div class="subtitle">Withdrawal amount ({{ccy}})</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { withdrawalStore } from "~/store";

@Component
export default class WithdrawalInfo extends Vue {
  public ccy = "USD";
  public get amount() {
    return withdrawalStore.amount;
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.withdrawal-info {
  margin-top: 30%;
  text-align: center;
}
.amount {
  font-size: 48px;
}
.subtitle {
  font-size: $font-size-small;
  margin-top: $normal-spacing;
}
</style>
