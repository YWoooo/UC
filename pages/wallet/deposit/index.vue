<template>
  <div class="deposit">
    <div>
      <DepositInfo />
      <DepositAmount @submit="submit" />
    </div>
    <DepositSubmit @submit="submit" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { depositStore } from "~/store";
import DepositInfo from "@/components/wallet/deposit/DepositInfo.vue";
import DepositAmount from "@/components/wallet/deposit/DepositAmount.vue";
import DepositSubmit from "@/components/wallet/deposit/DepositSubmit.vue";

@Component({ components: { DepositInfo, DepositAmount, DepositSubmit } })
export default class Deposit extends Vue {
  public submit() {
    if (depositStore.isBtnDisabled || depositStore.isBtnLoading) {
      return;
    }
    const sendData = {
      amount: depositStore.amount,
    };
    this.$message(`Deposit ${depositStore.amount} success.`, 'success');
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
@import "~/assets/styles/mixins/layout-app.scss";
.deposit {
  @include layout-app;
}
</style>
