<template>
  <div class="register">
    <div>
      <div class="_title">This is a UC</div>
      <RegisterForm />
    </div>
    <!-- <v-btn
      class="submit"
      block
      :color="'black'"
      :depressed="true"
      :loading="isBtnLoading"
      :disabled="isSubmitDisabled"
      @click="submit"
    >Register</v-btn>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import RegisterForm from "@/components/register/RegisterForm.vue";

@Component({
  components: { RegisterForm },
})
export default class Login extends Vue {
  public layout() {
    return "notLogin";
  }
  // public submit() {
  //   if (this.isSubmitDisabled) {
  //     return;
  //   }
  //   this.isBtnLoading = true;
  //   const sendData = {
  //     email: this.formData.email,
  //     verificationCode: +this.formData.verificationCode,
  //     password: this.formData.password,
  //   };
  // }
}
</script>
<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.register {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 48px);
  justify-content: space-between;
  padding: 0 24px;
}

/**
  Since '.title' is already used by veutify, with some !important css,
  I add a _ avoid these css.
 */
._title {
  font-size: 28px;
  margin-top: 60px;
  text-align: center;
}
</style>
