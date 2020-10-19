<template>
  <div class="transfer-amount">
    <TheInput
      v-model="amountString"
      :isNumberOnly="true"
      :isLocaleString="true"
      :isDollar="true"
      :placeholder="'Transfer amount (USD)'"
      :maxLength="10"
      :errMsg="errMsg"
      @enter="submit"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import { transferStore } from "~/store";
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
    transferStore.setAmount(this.amountNumber);
    this.errMsg = this.amountNumber <= 0 ? "Required." : "";
  }
  public onOptionClick(option: number) {
    this.amountString = option.toString();
    transferStore.setAmount(this.amountNumber);
  }
  public submit() {
    this.$emit("submit");
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.transfer-amount {
  margin-top: 40px;
}
.input {
  border-bottom: 1px solid $color-white;
  font-size: 20px;
  padding-bottom: 6px;
  width: 100%;
  &:focus {
    outline-style: none;
  }
  &::placeholder {
    color: inherit;
    opacity: 0.6;
  }
}
</style>
