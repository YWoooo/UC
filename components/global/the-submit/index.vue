<template>
  <v-btn
    class="submit"
    block
    :depressed="true"
    :loading="isBtnLoading"
    :disabled="isDisabled"
    @click="submit"
  >{{ text }}</v-btn>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class TheSubmit extends Vue {
  @Prop({ required: true })
  public isBtnLoading!: boolean;

  @Prop({ required: true })
  public isDisabled!: boolean;

  @Prop({ required: false, default: "Submit" })
  public text!: string;

  public submit() {
    if (this.isBtnLoading || this.isDisabled) {
      return;
    }
    this.$emit("submit");
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.submit {
  background: $color-black !important;
  color: $color-white;
  flex: 0;
  font-size: 20px;
  margin: 60px auto;
  padding: 24px 0 !important;
}
</style>
