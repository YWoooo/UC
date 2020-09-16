<template>
  <TheSubmit
    :text="'Register'"
    :isBtnLoading="isBtnLoading"
    :isDisabled="isDisabled"
    @submit="submit"
  />
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { registerStore } from "~/store";
import TheSubmit from "@/components/global/the-submit/index.vue";

@Component({ components: { TheSubmit } })
export default class RegisterSubmit extends Vue {
  public get isBtnLoading() {
    return registerStore.isBtnLoading;
  }
  public get isDisabled() {
    return !registerStore.isFormValid;
  }
  public submit() {
    this.$emit("submit");
  }
}
</script>
