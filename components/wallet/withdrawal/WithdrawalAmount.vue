<template>
  <div class="withdrawal-amount">
    <div class="options">
      <div
        class="option"
        v-for="(item, index) in options"
        :key="index"
        @click="onOptionClick(item)"
      >${{item.toLocaleString()}}</div>
      <div class="input">
        <TheInput
          v-model="amountString"
          :isNumberOnly="true"
          :isLocaleString="true"
          :isDollar="true"
          :maxLength="10"
          :errMsg="errMsg"
          @enter="submit"
        />  
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import { withdrawalStore } from "~/store";
import TheInput from "@/components/global/the-input/index.vue";

@Component({ components: { TheInput } })
export default class WithdrawalAmount extends Vue {
  public amountString = "";
  public errMsg = "";
  public options = [100, 300, 500, 1000, 3000, 5000, 10000];
  public get amountNumber() {
    return +this.amountString.replace(/\D/g, "");
  }
  @Watch("amountString")
  public onAmountChanged() {
    withdrawalStore.setAmount(this.amountNumber);
    this.errMsg = this.amountNumber <= 0 ? "Required." : "";
  }
  public onOptionClick(option: number) {
    this.amountString = option.toString();
    withdrawalStore.setAmount(this.amountNumber);
  }
  public submit() {
    this.$emit("submit");
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.withdrawal-amount {
  margin-top: 40px;
}
.options {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}
.option {
  border: 1px solid $color-black;
  border-radius: 36px;
  height: 34px;
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
  width: 65%;
}
</style>
