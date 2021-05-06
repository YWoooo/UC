<template>
  <div class="transfer-submit">
    <TheSubmit :isBtnLoading="isBtnLoading" :isDisabled="isBtnDisabled" @submit="submit" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import TheSubmit from "@/components/global/the-submit/index.vue";

@Component({ components: { TheSubmit } })
export default class TransferSubmit extends Vue {
  public get isBtnDisabled() {
    return this.$store.getters['TransferStore/isBtnDisabled'];
  }
  public get isBtnLoading() {
    return this.$store.state.TransferStore.isBtnLoading;
  }
  public submit() {
    this.$emit("submit");
  }
}
</script>
