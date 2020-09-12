<template>
  <div class="login-submit">
    <TheSubmit
      :text="'Login'"
      :isBtnLoading="isBtnLoading"
      :isDisabled="isDisabled"
      @submit="submit"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { loginStore } from "~/store";
import TheSubmit from "@/components/global/the-submit/index.vue";

@Component({
  components: { TheSubmit },
})
export default class LoginForm extends Vue {
  public get isBtnLoading() {
    return loginStore.isBtnLoading;
  }
  public get isDisabled() {
    return !loginStore.isFormValid;
  }
  public submit() {
    this.$emit("submit");
  }
}
</script>
