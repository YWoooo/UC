<template>
  <div class="register">
    <div>
      <div class="_title">This is a UC</div>
      <RegisterForm @submit="submit" />
    </div>
    <RegisterSubmit @submit="submit" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { registerStore } from "~/store";
import RegisterForm from "@/components/register/RegisterForm.vue";
import RegisterSubmit from "@/components/register/RegisterSubmit.vue";

@Component({ components: { RegisterForm, RegisterSubmit } })
export default class Login extends Vue {
  public layout() {
    return "notLogin";
  }
  public submit() {
    const { email, validationCode, password } = registerStore.formData;
    const sendData = {
      email,
      validationCode,
      password,
    };
    registerStore.setIsBtnLoading(true);
    console.log(sendData);
  }
}
</script>
<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.register {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 48px);
  justify-content: space-between;
  padding: 0 24px;
}

/**
  Since '.title' is already used by veutify, with some !important css,
  I add a _ avoid these css.
 */
._title {
  font-size: 28px;
  margin-top: 60px;
  text-align: center;
}
</style>
