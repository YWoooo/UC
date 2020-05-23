<template>
  <section class="register-form">
    <h1 class="f-title">Register</h1>
    <div class="form">
      <div class="form-item">
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
      <div class="form-item">
        <div class="form-item-inner">
          <input
            class="input-password"
            :type="passwordInputType"
            placeholder="Password"
            v-model="password"
            @input="validate('password')"
            @blur="validate('password')"
            @keypress="handleKeypress"
          />
          <div class="input-slot" @click="togglePassword">
            <i class="las la-eye" v-if="passwordInputType === 'password'"></i>
            <i class="las la-eye-slash" v-else></i>
          </div>
        </div>
        <div class="errMsg" v-if="!isValid.password">{{errMsg.password}}</div>
      </div>
      <div class="submit" :class="{disabled: isDisabled}" @click="handleSubmit">Register</div>
    </div>
    <nuxt-link to="/login">
      <span class="btn">Login</span>
    </nuxt-link>
  </section>
</template>
<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import { testCaseInterface, testCases } from "@/utils/testCases";
import { gAlertStore } from "~/store";
interface RegisterDataInterface {
  email: string;
  password: string;
}
@Component
export default class RegisterForm extends Vue {
  private email = "";
  private password = "";
  private passwordInputType = "password";
  private isValid = {
    email: false,
    password: false
  };
  private errMsg: { [key: string]: string } = {
    email: "",
    password: ""
  };
  private get isDisabled() {
    if (!this.email || !this.password) return true;
    for (const item in this.errMsg) {
      if (this.errMsg[item] && this.errMsg[item].length !== 0) {
        return true;
      }
    }
    return false;
  }
  private togglePassword() {
    this.passwordInputType =
      this.passwordInputType === "password" ? "text" : "password";
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
  private handleKeypress(e: KeyboardEvent) {
    if (e.keyCode === 13) this.handleSubmit(e);
  }
  private async handleSubmit(e: Event) {
    this.validate("email");
    this.validate("password");

    if (this.isDisabled === false) {
      const sendData = {
        email: this.email,
        password: this.password
      };
      try {
        const res = await this.$api.user.register(sendData);
        this.handleRes(res.data.code);
      } catch (e) {
        gAlertStore.sendAlert({
          type: "error",
          msg: "There is an error, please try again later."
        });
      }
    }
  }
  private handleRes(code: number) {
    switch (code) {
      case 1:
        this.$router.push("/home");
        break;
      case -21:
        gAlertStore.sendAlert({
          type: "error",
          msg: "This Email is already registered."
        });
        break;
      default:
        gAlertStore.sendAlert({
          type: "error",
          msg: "There is an error, please try again later."
        });
        break;
    }
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
.f-title {
  margin-bottom: 24px;
  font-size: 36px;
  font-weight: 300;
}
.form-item {
  height: 60px;
}
.form-item-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $color-black;
}
.input {
  @include input-item;
}
.input-password {
  @include input-item(calc(100% - 56px));
  border-style: none;
}
.input-slot {
  display: inline-block;
  width: 32px;
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
  float: right;
  text-align: right;
  margin-top: 8px;
  padding: 4px 0;
}
@media screen and (min-width: 768px) {
  .register-form {
    font-size: $font-size-md;
  }
  .f-title {
    font-size: 48px;
  }
  .form-item {
    height: 80px;
  }
}
</style>
