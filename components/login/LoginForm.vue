<template>
  <section class="login-form">
    <div class="form">
      <h1 class="title">This is a UC.</h1>
      <div class="login-form-item">
        <input
          class="input"
          type="email"
          placeholder="Email"
          v-model="email"
          @input="validate('email')"
          @blur="validate('email')"
        />
        <div class="errMsg" v-if="!isValid.email">{{errMsg.email}}</div>
      </div>
      <div class="login-form-item">
        <input
          class="input"
          type="password"
          placeholder="Password"
          v-model="password"
          @input="validate('password')"
          @blur="validate('password')"
        />
        <div class="errMsg" v-if="!isValid.password">{{errMsg.password}}</div>
      </div>
      <div class="submit" :class="{disabled: isDisabled}">Login</div>
    </div>
    <div class="btn">Register</div>
    <div class="btn">Foeget password?</div>
  </section>
</template>
<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import { testCaseInterface, testCases } from "@/components/login/testCases";
import isEmail from "validator/lib/isEmail";
interface loginData {
  email: string;
  password: string;
}
@Component
export default class LoginForm extends Vue {
  private email: string = "";
  private password: string = "";
  private isValid = {
    email: false,
    password: false
  };
  private errMsg: { [key: string]: string } = {
    email: "",
    password: ""
  };
  private get isDisabled() {
    for (const item in this.errMsg) {
      if (this.errMsg[item] && this.errMsg[item].length !== 0) {
        return true;
      }
    }
    return false;
  }
  private validate(target: keyof loginData) {
    if (testCases[target] !== undefined) {
      this.errMsg[target] = "";
      for (const item of testCases[target]) {
        if (item.rule(this[target]) === item.showMsgWhen) {
          this.errMsg[target] = item.msg;
          break;
        }
      }
    }
  }
  private mounted() {}
}
</script>
<style lang='scss' scoped>
@import "~/style/index.scss";
.login-form {
  @include clearfix;
  margin-top: 40%;
  padding: 0 24px;
}
.form {
  text-align: center;
}
.title {
  margin-bottom: 24px;
  font-size: 36px;
  font-weight: 300;
}
.login-form-item {
  height: 60px;
}
.input {
  width: 100%;
  outline-style: none;
  margin-bottom: 4px;
  border-style: none;
  border-bottom: 1px solid $color-black;
  padding: 8px 0;
  &::placeholder {
    opacity: 0.5;
  }
}
.errMsg {
  color: $color-red;
  text-align: left;
  font-size: 12px;
}
.submit {
  @include btn(36px, $color-black, $color-white);
  margin-top: 24px;
}
.disabled {
  opacity: 0.1;
}
.btn {
  float: right;
  clear: both;
  margin-top: 8px;
  padding: 4px 8px;
}
</style>
