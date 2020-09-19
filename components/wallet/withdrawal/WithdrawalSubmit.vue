<template>
  <div class="withdrawal-submit">
    <TheSubmit :isBtnLoading="isBtnLoading" :isDisabled="isBtnDisabled" @submit="submit" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { withdrawalStore } from "~/store";
import TheSubmit from "@/components/global/the-submit/index.vue";

@Component({ components: { TheSubmit } })
export default class WithdrawalSubmit extends Vue {
  public get isBtnDisabled() {
    return withdrawalStore.isBtnDisabled;
  }
  public get isBtnLoading() {
    return withdrawalStore.isBtnLoading;
  }
  public submit() {
    this.$emit("submit");
  }
}
</script>
