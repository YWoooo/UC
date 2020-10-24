<template>
  <div class="transfer">
    <div>
      <TransferInfo />
      <TransferAccounts />
      <TransferAmount @submit="submit" />        
    </div>
    <TransferSubmit @submit="submit" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { transferStore } from "~/store";
// Components.
import TransferInfo from "@/components/wallet/transfer/TransferInfo.vue";
import TransferAccounts from "@/components/wallet/transfer/TransferAccounts.vue";
import TransferAmount from "@/components/wallet/transfer/TransferAmount.vue";
import TransferSubmit from "@/components/wallet/transfer/TransferSubmit.vue";

@Component({ components: { TransferInfo, TransferAccounts, TransferAmount, TransferSubmit } })
export default class Transfer extends Vue {
  public submit() {
    if (transferStore.isBtnDisabled || transferStore.isBtnLoading) {
      return;
    }
    const sendData = {
      fromAccount: transferStore.fromAccount,
      toAccount: transferStore.toAccount,
      amount: transferStore.amount,
    };
    this.$alert("success", `Transfer ${transferStore.amount} success.`);
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
@import "~/assets/styles/mixins/layout-app.scss";
.transfer {
  @include layout-app;
}
</style>
