<template>
  <section class="login">
    <LoginForm />
  </section>
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
@import "~/style/index.scss";
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
}
@media screen and (min-width: 768px) {
  .login {
    width: 500px;
    margin: 0 auto;
  }
}
</style>
