<template>
  <div class="deposit-submit">
    <TheSubmit 
      :isBtnLoading="isBtnLoading" 
      :isDisabled="isBtnDisabled" 
      @submit="submit" 
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import TheSubmit from "@/components/global/the-submit/index.vue";

@Component({ components: { TheSubmit } })
export default class DepositSubmit extends Vue {
  public get DepositStore() {
    return this.$store.state.DepositStore
  }
  public get isBtnDisabled() {
    return this.$store.getters['DepositStore/isBtnDisabled']
  }
  public get isBtnLoading() {
    return this.DepositStore.isBtnLoading;
  }

  public submit() {
    this.$emit("submit");
  }
}
</script>
