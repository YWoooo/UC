<template>
  <div>
    <TheInput v-model="email" :isReadOnly="true" />
    <TheValiCodeGetter @change="onValiCode" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "nuxt-property-decorator";
import TheInput from "@/components/global/the-input/index.vue";
import TheValiCodeGetter from "@/components/global/the-valicode-getter/index.vue";

@Component({ components: { TheInput, TheValiCodeGetter } })
export default class TheEmailAuth extends Vue {
  @Prop({ required: true })
  public email!: string;

  public onValiCode(code: string) {
    this.$emit("change", code);
  }
}
</script>
