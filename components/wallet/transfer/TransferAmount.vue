<template>
  <div class="transfer-amount">
    <TheInput
      label="Amount"
      v-model="amountString"
      inputmode="numeric"
      :isNumberOnly="true"
      :isLocaleString="true"
      :isDollar="true"
      :maxLength="10"
      :msg="msg"
      :errMsg="errMsg"
      @enter="submit"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import TheInput from "@/components/global/the-input/index.vue";
import { transferConfigs } from '@/configs/wallet'

@Component({ components: { TheInput } })
export default class TransferAmount extends Vue {
  public maxAmount = transferConfigs.maxAmount
  public amountString = "";
  public errMsg = "";
  public get msg() {
    const limit = this.$formatter.money(this.maxAmount)
    return `The limit is ${limit} each time.`
  }
  public get amountNumber() {
    return +this.amountString.replace(/\D/g, "");
  }
  @Watch("amountString")
  public onAmountChanged() {
    this.$store.commit('TransferStore/setAmount', this.amountNumber)
    this.errMsg = this.amountNumber <= 0 ? "Required." : "";
  }
  public submit() {
    this.$emit("submit");
  }
}
</script>
