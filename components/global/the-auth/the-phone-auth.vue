<template>
  <div>
    <TheInput v-model="phone" :isReadOnly="true" />
    <TheInput
      v-model="validationCode"
      :isNumberOnly="true"
      :isLocaleString="false"
      :errMsg="errMsg"
      :maxLength="6"
      :isBtn="true"
      :btnText="'GET'"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "nuxt-property-decorator";
import TheInput from "@/components/global/the-input/index.vue";

@Component({ components: { TheInput } })
export default class ThePhoneAuth extends Vue {
  @Prop({ required: true })
  public phone!: string;
  public validationCode = "";
  public errMsg = "";
  @Watch("validationCode")
  public onValidationCode() {
    if (!this.validationCode) {
      this.errMsg = "Required.";
    }
  }
  public inputBtnState = {
    isBtnLoading: false,
    isBtnDisabled: false,
  };
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
</style>
