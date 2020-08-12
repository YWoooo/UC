<template>
  <div class="deposit-info">
    <div class="amount">$ {{amount}}</div>
    <div class="subtitle">Deposit amount ({{ccy}})</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component
export default class DepositInfo extends Vue {
  public amount = 8866.88;
  public ccy = "USD";
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
  margin-top: 20px;
  font-size: 12px;
}
</style>
