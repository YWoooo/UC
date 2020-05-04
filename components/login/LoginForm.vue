<template>
  <section class="login-form">
    <div class="form">
      <h1 class="title">Login</h1>
      <input class="input" type="email" placeholder="Email" />
      <input class="input" type="password" placeholder="Password" />
    </div>
    <div class="register">Register</div>
  </section>
</template>
<style lang='scss' scoped>
@import "~/style/var.scss";
.login-form {
  margin-top: 40%;
  border: 1px solid red;
}
.form {
  text-align: center;
}
.title {
  margin-bottom: 24px;
  font-size: 36px;
  font-weight: 300;
}
.input {
  width: 80%;
  outline-style: none;
  margin-bottom: 16px;
  border-style: none;
  border-bottom: 1px solid $color-black;
  padding: 8px 0;
}
.register {
  float: right;
  border: 1px solid red;
  padding: 4px 8px;
}
</style>
