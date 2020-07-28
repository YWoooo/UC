<template>
  <div class="login">
    <div class="_title">This is a UC</div>
    <div class="form">
      <div class="form-item">
        <div class="label">Email</div>
        <div class="input-inner">
          <input
            class="input"
            type="email"
            v-model="formData.email"
            @input="validateEmail"
            @blur="validateEmail"
          />
        </div>
        <div class="errMsg">{{errMsg.email}}</div>
      </div>
      <div class="form-item">
        <div class="label">Password</div>
        <div class="input-inner">
          <input
            class="input"
            :type="showPassword ? 'text':'password'"
            v-model="formData.password"
            @input="validatePassword"
            @blur="validatePassword"
          />
          <div class="input-slot" @click="showPassword = !showPassword">
            <i class="las la-eye" v-if="!showPassword"></i>
            <i class="las la-eye-slash" v-else></i>
          </div>
        </div>
        <div class="errMsg">{{errMsg.password}}</div>
      </div>
    </div>
    <v-btn
      class="submit"
      block
      :color="'black'"
      :depressed="true"
      :loading="isBtnLoading"
      :disabled="isSubmitDisabled"
      @click="submit"
    >Login</v-btn>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import isEmail from "validator/lib/isEmail";
import { regs } from "~/utils/regs";
@Component
export default class Login extends Vue {
  public showPassword = false;
  public isBtnLoading = false;
  public formData = {
    email: "",
    password: "",
  };
  public errMsg = {
    email: "",
    password: "",
  };
  public get isSubmitDisabled() {
    if (!this.formData.email || !this.formData.password) {
      return true;
    }
    return Object.values(this.errMsg).some((e) => e !== "");
  }
  public layout() {
    return "notLogin";
  }
  public validateEmail() {
    if (!this.formData.email) return (this.errMsg.email = "Required.");
    this.errMsg.email = isEmail(this.formData.email)
      ? ""
      : "Wrong format of email.";
  }
  public validatePassword() {
    if (!this.formData.password) return (this.errMsg.password = "Required.");
    this.errMsg.password = regs.password.test(this.formData.password)
      ? ""
      : "6-15 digit, with uppercase, lowercase, and number.";
  }
  public submit() {
    if (this.isSubmitDisabled) return;
    this.isBtnLoading = true;
    const sendData = {
      email: this.formData.email,
      password: this.formData.password,
    };
  }
}
</script>
<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.login {
  padding: 0 24px;
}
/**
  Since '.title' is already used by veutify, with some !important css,
  I add a _ avoid these css.
 */
._title {
  margin-top: 60px;
  text-align: center;
  font-size: 28px;
}
.form {
  margin-top: 40px;
}
.form-item {
  padding: 12px 0;
}
.label {
  margin-bottom: 4px;
  font-size: 16px;
}
.input {
  width: 100%;
  outline-style: none;
  margin-bottom: 4px;

  padding: 4px 0;
  font-size: 20px;
}
.input-inner {
  display: flex;
  border-bottom: 1px solid black;
}
.input-slot {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  flex-shrink: 0;
  font-size: 20px;
}
.errMsg {
  height: 16px;
  margin-top: 4px;
  line-height: 16px;
  font-size: 16px;
}
.submit {
  margin-top: 60px;
  padding: 24px 0 !important;
  font-size: 20px;
  color: white;
}
</style>
