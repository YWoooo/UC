<template>
  <section class="register-form">
    <h1 class="title">Register</h1>
    <div class="form">
      <div class="register-form-item">
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
      <div class="register-form-item">
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
      <div class="submit" :class="{disabled: isDisabled}" @click="handleSubmit">Register</div>
    </div>
    <nuxt-link to="/login">
      <div class="btn">Login</div>
    </nuxt-link>
  </section>
</template>
<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import { testCaseInterface, testCases } from "@/utils/testCases";
interface RegisterDataInterface {
  email: string;
  password: string;
}
@Component
export default class RegisterForm extends Vue {
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
  private validate(target: keyof RegisterDataInterface) {
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
  private handleSubmit() {
    this.validate("email");
    this.validate("password");

    if (this.isDisabled === false) {
      const sendData = {
        email: this.email,
        password: this.password
      };
      console.log(sendData);
    }
  }
  private mounted() {
    this.$api.user.register({
      email: "test6@gmail.com",
      password: "Abc123"
    });
  }
}
</script>
<style lang='scss' scoped>
@import "~/style/index.scss";
.register-form {
  @include clearfix;
  padding: 0 24px;
  font-size: $font-size-xs;
}
.form {
  text-align: center;
}
.title {
  margin-bottom: 24px;
  font-size: 36px;
  font-weight: 300;
}
.register-form-item {
  height: 60px;
}
.input {
  @include input-item;
}
.errMsg {
  @include input-errmsg;
}
.submit {
  @include btn(36px, $color-black, $color-white);
  margin-top: 24px;
}
.disabled {
  opacity: 0.1;
}
.btn {
  text-align: right;
  margin-top: 8px;
  padding: 4px 0;
}
@media screen and (min-width: 768px) {
  .register-form {
    font-size: $font-size-md;
  }
  .title {
    font-size: 48px;
  }
  .register-form-item {
    height: 80px;
  }
}
</style>
