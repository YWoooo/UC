<template>
  <the-submit 
    @click="submit"
    :isBtnLoading="false"
    :isDisabled="false" />
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import TheSubmit from "@/components/global/the-submit/index.vue";

@Component({ components: { TheSubmit } })
export default class BankAccountBindingSubmit extends Vue {
  public submit() {
      
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
</style>
