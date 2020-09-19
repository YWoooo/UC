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
import { withdrawalStore } from "~/store";
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
    this.$alert("success", `Withdrawal ${withdrawalStore.amount} success.`);
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.withdrawal {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: $normal-spacing;
}
</style>
