<template>
  <div class="deposit-info">
    <div class="amount" v-if="amount<=0">-</div>
    <div class="amount" v-else>$ {{amount.toLocaleString()}}</div>
    <div class="subtitle">Deposit amount ({{ccy}})</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { depositStore } from "~/store";

@Component
export default class DepositInfo extends Vue {
  public ccy = "USD";
  public get amount() {
    return depositStore.amount;
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.deposit-info {
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
