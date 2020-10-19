<template>
  <div class="transfer-info">
    <div class="amount" v-if="amount<=0">-</div>
    <div class="amount" v-else>$ {{amount.toLocaleString()}}</div>
    <div class="subtitle">{{ fromAccount }} (USD) &rarr; {{ toAccount }} (USD)</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { transferStore } from "~/store";

@Component
export default class TransferInfo extends Vue {
  public ccy = "USD";
  public get fromAccount() {
    return transferStore.fromAccount;
  }
  public get toAccount() {
    return transferStore.toAccount;
  }
  public get amount() {
    return transferStore.amount;
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.transfer-info {
  margin-top: 30%;
  text-align: center;
}
.amount {
  font-size: 48px;
}
.subtitle {
  font-size: 12px;
  margin-top: 20px;
}
</style>
