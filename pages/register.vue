<template>
  <section class="register">
    <RegisterForm />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import RegisterForm from "~/components/register/RegisterForm.vue";

export default Vue.extend({
  components: {
    RegisterForm
  }
});
</script>

<style lang='scss' scoped>
@import "~/style/index.scss";
.register {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
}
@media screen and (min-width: 768px) {
  .register {
    width: 500px;
    margin: 0 auto;
  }
}
</style>
