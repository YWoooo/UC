<template>
  <div class="withdrawal">
    <div>
      <WithdrawalInfo />
      <WithdrawalAmount @submit="submit" />
    </div>
    <WithdrawalSubmit @submit="submit" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
// Stores.
import { theAuthStore } from "~/store";
import { withdrawalStore } from "~/store";
// Components.
import WithdrawalInfo from "@/components/wallet/withdrawal/WithdrawalInfo.vue";
import WithdrawalAmount from "@/components/wallet/withdrawal/WithdrawalAmount.vue";
import WithdrawalSubmit from "@/components/wallet/withdrawal/WithdrawalSubmit.vue";

@Component({
  components: { WithdrawalInfo, WithdrawalAmount, WithdrawalSubmit },
})
export default class Withdrawal extends Vue {
  public submit() {
    if (withdrawalStore.isBtnDisabled || withdrawalStore.isBtnLoading) {
      return;
    }
    const sendData = {
      amount: withdrawalStore.amount,
    };
    theAuthStore.askAuth(this.withdrawal);
  }
  public withdrawal() {
    const sendData = {
      amount: withdrawalStore.amount,
    };
    this.$message(`Deposit $${withdrawalStore.amount} success.`, 'success');
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
@import "~/assets/styles/mixins/layout-app.scss";
.withdrawal {
  @include layout-app;
}
</style>
