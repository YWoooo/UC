<template>
  <div class="deposit-submit">
    <v-btn
      class="submit"
      block
      :loading="isBtnLoading"
      :disabled="isBtnDisabled"
      @click="submit"
    >Submit</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { depositStore } from "~/store";

@Component
export default class DepositSubmit extends Vue {
  public get isBtnDisabled() {
    return depositStore.isBtnDisabled;
  }
  public get isBtnLoading() {
    return depositStore.isBtnLoading;
  }
  public submit() {
    this.$emit("submit");
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.deposit-submit {
  margin-bottom: 20px;
}
::v-deep
  .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  height: 48px;
  background: $color-success;
  color: $color-white;
  font-size: 20px;
}
</style>
