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
import { loginStore } from "~/store";
import TheSubmit from "@/components/global/the-submit/index.vue";

@Component({ components: { TheSubmit } })
export default class LoginSubmit extends Vue {
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
