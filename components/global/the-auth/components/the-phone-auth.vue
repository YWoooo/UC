<template>
  <div>
    <TheInput v-model="phone" :isReadOnly="true" />
    <TheInputValicode />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import TheInput from "@/components/global/the-input/index.vue";
import TheInputValicode from "./the-input-valicode.vue";

@Component({ components: { TheInput, TheInputValicode } })
export default class ThePhoneAuth extends Vue {
  public phone = "911927419";
}
</script>
