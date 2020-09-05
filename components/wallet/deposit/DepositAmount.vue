<template>
  <div class="deposit-amount">
    <div class="options">
      <!-- BUG: When option is clicked, this input won't show the value reactivly. -->
      <div
        class="option"
        v-for="(item, index) in options"
        :key="index"
        @click="onOptionClick(item)"
      >${{item.toLocaleString()}}</div>
    </div>
    <TheInput
      v-model="amountString"
      :isNumberOnly="true"
      :isDollar="true"
      :placeholder="'Deposit amount (USD)'"
      :maxLength="10"
      :errMsg="errMsg"
      @enter="submit"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import { depositStore } from "~/store";
import TheInput from "@/components/global/the-input/index.vue";

@Component({
  components: { TheInput },
})
export default class DepositAmount extends Vue {
  public amountString = "";
  public errMsg = "";
  public options = [100, 300, 500, 1000, 3000];
  @Watch("amountString")
  public onAmountChanged() {
    const amountString = this.amountString;
    const amountNumber = +amountString.replace(/\D/g, "");
    depositStore.setAmount(amountNumber);
    if (amountNumber <= 0) {
      this.errMsg = "Required.";
    }
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
