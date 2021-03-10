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
// Components.
import RegisterForm from "@/components/register/RegisterForm.vue";
import RegisterSubmit from "@/components/register/RegisterSubmit.vue";
// Types.
import { Register } from '@/interfaces/Register'


@Component({ components: { RegisterForm, RegisterSubmit } })
export default class RegisterPage extends Vue {
  public layout() {
    return "notLogin";
  }
  public setSendData(): Register.SendData {
    const { email, validationCode, password } = this.$store.state.RegisterStore.formData;
    return {
      email,
      validationCode,
      password,
    }
  }
  public async submit() {
    const sendData = this.setSendData();
    this.$store.commit('RegisterStore/setIsBtnLoading', true)
    try {
      await this.$api.register(sendData)
      this.$router.push('/')
    } catch (e) {
      console.log(e)
    } finally{
      this.$store.commit('RegisterStore/setIsBtnLoading', false)
    }
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
