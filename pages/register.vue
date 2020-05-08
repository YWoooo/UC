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
</style>
