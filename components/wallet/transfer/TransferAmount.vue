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
      :errMsg="errMsg"
      @enter="submit"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import TheInput from "@/components/global/the-input/index.vue";

@Component({ components: { TheInput } })
export default class TransferAmount extends Vue {
  public amountString = "";
  public errMsg = "";
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
