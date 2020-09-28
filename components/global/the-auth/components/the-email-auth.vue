<template>
  <div>
    <TheInput v-model="email" :isReadOnly="true" />
    <TheInputValicode />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import TheInput from "@/components/global/the-input/index.vue";
import TheInputValicode from "./the-input-valicode.vue";

@Component({ components: { TheInput, TheInputValicode } })
export default class TheEmailAuth extends Vue {
  public email = "test1@gmail.com";
}
</script>
