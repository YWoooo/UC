<template>
  <v-btn
    class="submit"
    block
    :color="'black'"
    :depressed="true"
    :loading="isBtnLoading"
    :disabled="isSubmitDisabled"
    @click="submit"
  >Login</v-btn>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class LoginSubmit extends Vue {
  public isBtnLoading = true;
  public isSubmitDisabled = true;
  public submit() {
    // if (this.isSubmitDisabled) return;
    // this.isBtnLoading = true;
    // const sendData = {
    //   email: this.formData.email,
    //   password: this.formData.password,
    // };
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.submit {
  color: white;
  flex: 0;
  font-size: 20px;
  margin: 60px auto;
  padding: 24px 0 !important;
}
</style>
