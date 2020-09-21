<template>
  <div>
    <TheInput v-model="email" :isReadOnly="true" />
    <TheInput
      v-model="validationCode"
      :isNumberOnly="true"
      :isLocaleString="false"
      :errMsg="errMsg"
      :maxLength="6"
      :isBtn="true"
      :isBtnLoading="isBtnLoading"
      :isBtnDisabled="isBtnDisabled"
      :btnText="'GET'"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "nuxt-property-decorator";
import TheInput from "@/components/global/the-input/index.vue";

@Component({ components: { TheInput } })
export default class TheEmailAuth extends Vue {
  @Prop({ required: true })
  public email!: string;

  public validationCode = "";
  public errMsg = "";
  public isBtnLoading = false;
  public isBtnDisabled = false;

  @Watch("validationCode")
  public onValidationCode() {
    this.$emit("change", this.validationCode);
    this.verify();
  }

  public verify() {
    this.errMsg = "";
    if (!this.validationCode) {
      return (this.errMsg = "Required.");
    }
    if (this.validationCode.length < 6) {
      return (this.errMsg = "Should be 6 numbers.");
    }
  }
}
</script>
