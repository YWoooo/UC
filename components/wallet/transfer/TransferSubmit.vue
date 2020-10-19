<template>
  <div class="transfer-submit">
    <TheSubmit :isBtnLoading="isBtnLoading" :isDisabled="isBtnDisabled" @submit="submit" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { transferStore } from "~/store";
import TheSubmit from "@/components/global/the-submit/index.vue";

@Component({ components: { TheSubmit } })
export default class TransferSubmit extends Vue {
  public get isBtnDisabled() {
    return transferStore.isBtnDisabled;
  }
  public get isBtnLoading() {
    return transferStore.isBtnLoading;
  }
  public submit() {
    this.$emit("submit");
  }
}
</script>
