<template>
  <div class="login">
    <div>
      <div class="_title">This is a UC</div>
      <LoginForm @submit="submit" />
    </div>
    <LoginSubmit @submit="submit" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
// Components.
import LoginForm from "@/components/login/LoginForm.vue";
import LoginSubmit from "@/components/login/LoginSubmit.vue";
// Types.
import { Login } from '@/interfaces/login'
import { Middleware } from '@nuxt/types'

const checkIsLogin: Middleware = ({ app, redirect }) => {
  const refreshToken = app.$cookies.get('refreshToken')
  if (refreshToken) return redirect('/')
}

@Component({ 
  components: { LoginForm, LoginSubmit },
  middleware: checkIsLogin
})
export default class LoginPage extends Vue {
  public layout() {
    return "notLogin";
  }
  public setSendData() {
    const { email, password } = this.$store.state.LoginStore.formData;
    return {
      email,
      password,
    }
  }
  public async submit() {
    const sendData: Login.SendData  = this.setSendData()
    this.$store.commit('LoginStore/setIsBtnLoading', true)
    try {
      await this.$api.login(sendData)
      this.$router.push('/')
    } catch (e) {
      console.log(e)
    } finally{
      this.$store.commit('LoginStore/setIsBtnLoading', false)
    }
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.login {
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
