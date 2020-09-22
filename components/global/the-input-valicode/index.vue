<template>
  <TheInput
    v-model="valiCode"
    :isNumberOnly="true"
    :isLocaleString="false"
    :errMsg="errMsg"
    :maxLength="6"
    :isBtn="true"
    :isBtnLoading="isBtnLoading"
    :isBtnDisabled="isBtnDisabled"
    :btnText="btnText"
    @btnClick="getCode"
  />
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import TheInput from "@/components/global/the-input/index.vue";

@Component({ components: { TheInput } })
export default class TheInputValicode extends Vue {
  public valiCode = "";
  public errMsg = "";
  public isBtnLoading = false;
  public cd = 0;
  public get isBtnDisabled() {
    return this.errMsg !== "" || this.cd > 0;
  }
  public get btnText() {
    return this.cd > 0 ? `${this.cd}s` : "Get";
  }
  @Watch("valiCode")
  public onvaliCode() {
    this.$emit("change", this.valiCode);
    this.verify();
  }
  public verify() {
    this.errMsg = "";
    if (!this.valiCode) {
      return (this.errMsg = "Required.");
    }
    if (this.valiCode.length < 6) {
      return (this.errMsg = "Should be 6 numbers.");
    }
  }
  public getCode() {
    if (this.isBtnDisabled) {
      return;
    }
    this.countDown();
  }
  public countDown() {
    this.cd = 10;
    const timer = setInterval(() => {
      this.cd > 0 ? this.cd-- : clearInterval(timer);
    }, 1000);
  }
}
</script>
