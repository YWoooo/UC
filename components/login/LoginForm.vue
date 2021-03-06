<template>
  <div class="login-form">
    <TheInput :label="'Email'" v-model="formData.email" :type="'email'" :errMsg="errMsg.email" />
    <TheInput
      :label="'Password'"
      v-model="formData.password"
      :type="'password'"
      :errMsg="errMsg.password"
      :maxLength="15"
      @enter="submit"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import TheInput from "@/components/global/the-input/index.vue";
import isEmail from "validator/lib/isEmail";
import { regs } from "@/utils/regs";

@Component({ components: { TheInput }})
export default class LoginForm extends Vue {
  public showPassword = false;
  public formData = {
    email: "",
    password: "",
  };
  public errMsg = {
    email: "",
    password: "",
  };
  public get isFormValid() {
    const isEmpty = Object.values(this.formData).some((e) => !e);
    if (isEmpty) return false;
    const isFormValid = Object.values(this.errMsg).every((e) => !e);
    return isFormValid;
  }

  @Watch("formData.email")
  public onEmail() {
    const { email } = this.formData;
    this.$store.commit('LoginStore/setFormData', {
      key: "email",
      val: email,
    })
    this.validateEmail();
    this.$store.commit('LoginStore/setIsFormValid', this.isFormValid)
  }
  public validateEmail() {
    const { email } = this.formData;
    if (!email) return (this.errMsg.email = "Required.");
    this.errMsg.email = isEmail(email) ? "" : "Wrong format of email.";
  }

  @Watch("formData.password")
  public onPassword() {
    const { password } = this.formData;
    this.$store.commit('LoginStore/setFormData', {
      key: "password",
      val: password,
    })
    this.validatePassword();
    this.$store.commit('LoginStore/setIsFormValid', this.isFormValid)
  }
  public validatePassword() {
    const { password } = this.formData;
    if (!password) return (this.errMsg.password = "Required.");
    this.errMsg.password = regs.password.test(password)
      ? ""
      : "6-15 digit, with uppercase, lowercase, and number.";
  }

  public submit() {
    this.$emit("submit");
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.login-form {
  margin-top: 40px;
}
</style>
