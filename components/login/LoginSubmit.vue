<template>
  <TheSubmit
    :text="'Login'"
    :isBtnLoading="isBtnLoading"
    :isDisabled="isDisabled"
    @submit="submit"
  />
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import TheSubmit from "@/components/global/the-submit/index.vue";

@Component({ components: { TheSubmit } })
export default class LoginSubmit extends Vue {
  public get isBtnLoading() {
    return this.$store.state.LoginStore.isBtnLoading
  }
  public get isDisabled() {
    return !this.$store.state.LoginStore.isFormValid
  }
  public submit() {
    this.$emit("submit");
  }
}
</script>
