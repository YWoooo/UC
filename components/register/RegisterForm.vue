<template>
  <section class="register-form">
    <div class="form">
      <h1 class="title">This is a UC.</h1>
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
@Component
export default class RegisterForm extends Vue {
  private email: string = "";
  private phone: string = "";
  private password: string = "";
  private isDisabled: boolean = false;
  private isValid = {
    email: false,
    phone: false,
    password: false
  };
  private errMsg: { [key: string]: string } = {
    email: "",
    phone: "",
    password: ""
  };
  private validate(target: string) {
    console.log("hi");
    // if (testCases[target] !== undefined) {
    //   this.errMsg[target] = "";
    //   for (const item of testCases[target]) {
    //     if (item.rule(this[target]) === item.showMsgWhen) {
    //       this.errMsg[target] = item.msg;
    //       break;
    //     }
    //   }
    // }
  }
  private handleSubmit() {
    console.log("hi");
  }
}
</script>
<style lang='scss' scoped>
@import "~/style/index.scss";
.register-form {
  @include clearfix;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
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
</style>
