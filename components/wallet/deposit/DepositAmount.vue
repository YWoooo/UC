<template>
  <div class="deposit-amount">
    <div class="options">
      <div
        class="option"
        v-for="(item, index) in options"
        :key="index"
        @click="onOptionClick(item)"
      >${{item.toLocaleString()}}</div>
    </div>
    <input
      class="input"
      type="text"
      v-model="amountString"
      placeholder="Deposit amount (USD)"
      maxlength="10"
      @keypress.enter="submit"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import { depositStore } from "~/store";
import { numberOnly } from "@/utils/numberOnly";

@Component
export default class DepositAmount extends Vue {
  public amountString = "";
  public options = [100, 300, 500, 1000, 3000];
  @Watch("amountString")
  public onAmountChanged() {
    const amountNumber = +numberOnly(this.amountString);
    this.amountString = this.formatAmountString(amountNumber);
    depositStore.setAmount(amountNumber);
  }
  public formatAmountString(amount: number) {
    return "$" + amount.toLocaleString();
  }
  public onOptionClick(option: number) {
    this.amountString = option.toString();
  }
  public submit() {
    this.$emit("submit");
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.deposit-amount {
  margin-top: 40px;
}
.options {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.option {
  border: 1px solid $color-white;
  border-radius: 36px;
  margin-bottom: 16px;
  padding: 4px;
  text-align: center;
  width: 30%;
  &:nth-of-type(3n + 2) {
    margin-left: 5%;
    margin-right: 5%;
  }
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
