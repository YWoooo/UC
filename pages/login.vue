<template>
  <div class="login">
    <div class="_title">This is a UC</div>
    <div class="form">
      <div class="form-item">
        <div class="label">Email</div>
        <div class="input-inner">
          <input class="input" type="email" />
        </div>
        <div class="err">errerreerr</div>
      </div>
      <div class="form-item">
        <div class="label">Password</div>
        <div class="input-inner">
          <input class="input" type="password" />
          <div class="input-slot">
            <i class="las la-eye"></i>
            <!-- <i class="las la-eye-slash"></i> -->
          </div>
        </div>
        <div class="err"></div>
      </div>
    </div>
    <div class="submit">Login</div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import LoginForm from "~/components/login/LoginForm.vue";
export default Vue.extend({
  components: {
    LoginForm,
  },
  layout: "notLogin",
});
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
  margin-top: 40px;
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
.err {
  font-size: 16px;
}
.submit {
  margin-top: 60px;
  padding: 8px 0;
  background: black;
  color: white;
  text-align: center;
  font-size: 20px;
}
</style>
