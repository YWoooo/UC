<template>
  <div class="register-form">
    <TheInput :label="'Email'" v-model="formData.email" :type="'email'" inputmode="email" :errMsg="errMsg.email" />
    <TheInput
      :label="'Validation Code'"
      v-model="formData.validationCode"
      inputmode="numeric"
      :isNumberOnly="true"
      :isLocaleString="false"
      :errMsg="errMsg.validationCode"
      :maxLength="6"
      :isBtn="true"
      :btnText="'GET'"
      :isBtnDisabled="isInputBtnDisabled"
      :isBtnLoading="isInputBtnLoading"
      @btnClick="getVerifyCode"
    />
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
import { registerStore } from "~/store";
import TheInput from "@/components/global/the-input/index.vue";
import isEmail from "validator/lib/isEmail";
import { regs } from "~/utils/regs";

@Component({
  components: { TheInput },
})
export default class RegisterForm extends Vue {
  public showPassword = false;
  public isInputBtnLoading = false
  public formData = {
    email: "",
    validationCode: "",
    password: "",
  };
  public errMsg = {
    email: "",
    validationCode: "",
    password: "",
  };
  public get isInputBtnDisabled() {
    return this.isInputBtnLoading || !this.formData.email || !!this.errMsg.email
  }
  public get isFormValid() {
    const isEmpty = Object.values(this.formData).some((e) => !e);
    if (isEmpty) return false;
    const isFormValid = Object.values(this.errMsg).every((e) => !e);
    return isFormValid;
  }

  @Watch("formData.email")
  public onEmail() {
    registerStore.setFormData({
      key: "email",
      val: this.formData.email,
    });
    this.validateEmail();
    registerStore.setIsFormValid(this.isFormValid);
  }
  public validateEmail() {
    const { email } = this.formData;
    if (!email) return (this.errMsg.email = "Required.");
    this.errMsg.email = isEmail(email) ? "" : "Wrong format of email.";
  }

  @Watch("formData.validationCode")
  public onValidationCode() {
    registerStore.setFormData({
      key: "validationCode",
      val: this.formData.validationCode,
    });
    this.validateValidationCode();
    registerStore.setIsFormValid(this.isFormValid);
  }
  public validateValidationCode() {
    if (!this.formData.validationCode) {
      return (this.errMsg.validationCode = "Required.");
    }
  }

  @Watch("formData.password")
  public onPassword() {
    registerStore.setFormData({
      key: "password",
      val: this.formData.password,
    });
    this.validatePassword();
    registerStore.setIsFormValid(this.isFormValid);
  }
  public validatePassword() {
    const { password } = this.formData;
    if (!password) return (this.errMsg.password = "Required.");
    this.errMsg.password = regs.password.test(password)
      ? ""
      : "6-15 digit, with uppercase, lowercase, and number.";
  }

  public async getVerifyCode() {
    try {
      this.isInputBtnLoading = true
      this.$api.getVerifyCode({
        receiver: this.formData.email,
        receiverType: 'email'
      })
    } catch(e) {
      console.error(e)
    } finally {
      this.isInputBtnLoading = false
    }

  }

  public submit() {
    this.$emit("submit");
  }
}
</script>
<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.register-form {
  margin-top: 40px;
}
.form-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 6px 0;
}
.label {
  font-size: 16px;
  width: 100%;
}
.input {
  border-bottom: 1px solid black;
  display: flex;
  width: 100%;
}
.input-inner {
  font-size: 20px;
  margin-bottom: 4px;
  outline-style: none;
  width: 100%;
}
.input-slot {
  align-items: center;
  display: inline-flex;
  flex-shrink: 0;
  font-size: 20px;
  justify-content: center;
  width: 60px;
}
.errMsg {
  font-size: 16px;
  height: 16px;
  line-height: 16px;
  margin-top: 4px;
  width: 100%;
}
.input-short {
  box-sizing: border-box;
  margin-right: 24px;
  width: unset;
}
.get {
  color: white;
  width: 100px;
}
.flex {
  display: flex;
}
</style>
