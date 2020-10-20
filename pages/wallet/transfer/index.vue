<template>
  <div class="transfer">
    <div>
      <TransferInfo />
      <TransferAccounts />
      <TransferAmount />
    </div>
    <TransferSubmit />
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
export default class Transfer extends Vue {}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
@import "~/assets/styles/mixins/layout-app.scss";
.transfer {
  @include layout-app;
}
</style>
