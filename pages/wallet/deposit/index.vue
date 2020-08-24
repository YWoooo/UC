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

@Component({
  components: { DepositInfo, DepositAmount, DepositSubmit },
})
export default class Deposit extends Vue {
  public submit() {
    if (depositStore.isBtnDisabled || depositStore.isBtnLoading) {
      return;
    }
    const sendData = {
      amount: depositStore.amount,
    };
    console.log(sendData);
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.deposit {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: $normal-spacing;
}
</style>
