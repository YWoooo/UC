<template>
  <div>
    <TheInput v-model="email" :isReadOnly="true" />
    <TheInputValicode @change="onValiCode" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import TheInput from "@/components/global/the-input/index.vue";
import TheInputValicode from "@/components/global/the-input-valicode/index.vue";

@Component({ components: { TheInput, TheInputValicode } })
export default class TheEmailAuth extends Vue {
  @Prop({ required: true })
  public email!: string;

  public onValiCode(code: string) {
    this.$emit("change", code);
  }
}
</script>
