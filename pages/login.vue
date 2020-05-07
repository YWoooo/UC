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
    LoginForm
  }
});
</script>

<style lang='scss' scoped>
@import "~/style/index.scss";
</style>
