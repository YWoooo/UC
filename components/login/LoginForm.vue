<template>
  <div class="form">
    <div class="form-item">
      <TheInput :label="'Email'" v-model="formData.email" :type="'email'" :errMsg="errMsg.email" />
    </div>
    <div class="form-item">
      <div class="label">Password</div>
      <div class="input">
        <input
          class="input-inner"
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
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import TheInput from "@/components/global/the-input/index.vue";
import isEmail from "validator/lib/isEmail";
import { regs } from "~/utils/regs";

@Component({
  components: { TheInput },
})
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
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.form {
  margin-top: 40px;
}
.form-item {
  padding: 6px 0;
}
.label {
  font-size: 16px;
}
.input {
  border-bottom: 1px solid black;
  display: flex;
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
}
</style>
