<template>
  <div class="deposit-submit">
    <TheSubmit :isBtnLoading="isBtnLoading" :isDisabled="isBtnDisabled" @submit="submit" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { depositStore } from "~/store";
import TheSubmit from "@/components/global/the-submit/index.vue";

@Component({ components: { TheSubmit } })
export default class DepositSubmit extends Vue {
  public get isBtnDisabled() {
    return depositStore.isBtnDisabled;
  }
  public get isBtnLoading() {
    return depositStore.isBtnLoading;
  }
  public submit() {
    this.$emit("submit");
  }
}
</script>
