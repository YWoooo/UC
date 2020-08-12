<template>
  <div class="deposit-submit">
    <v-btn
      class="submit"
      block
      :loading="state.isBtnLoading"
      :disabled="state.idBtnDisabled"
      @click="submit"
    >Submit</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component
export default class DepositSubmit extends Vue {
  public state = {
    idBtnDisabled: false,
    isBtnLoading: false,
  };
  public submit() {
    console.log("submit");
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
