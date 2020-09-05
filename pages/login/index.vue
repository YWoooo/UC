<template>
  <div class="login">
    <div>
      <div class="_title">This is a UC</div>
      <LoginForm />
    </div>
    <LoginSubmit />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import LoginForm from "@/components/login/LoginForm.vue";
import LoginSubmit from "@/components/login/LoginSubmit.vue";

@Component({
  components: { LoginForm, LoginSubmit },
})
export default class Login extends Vue {
  public layout() {
    return "notLogin";
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
