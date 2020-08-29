<template>
  <div class="input-wrapper">
    <input
      type="text"
      class="input"
      :value="value"
      :placeholder="placeholder"
      :maxLength="maxLength"
      @input="onInput"
      @keypress.enter="onEnter"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "nuxt-property-decorator";
import { numberOnly } from "@/utils/numberOnly";

@Component
export default class TheInput extends Vue {
  @Prop({ required: true })
  public value!: string | number;

  @Prop({ required: false, default: "" })
  public placeholder!: string;

  @Prop({ required: false, default: 10 })
  public maxLength!: number;

  public onInput(event: InputEvent) {
    let value = (event.currentTarget as HTMLInputElement).value;
    this.$emit("input", value);
  }

  public onEnter() {
    this.$emit("enter");
  }

  public numberOnly(value: string): string {
    return numberOnly(value);
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.input-wrapper {
  border-bottom: 1px solid $color-black;
}
.input {
  border-style: none;
  color: $color-black;
  font-size: $font-size-normal;
  outline-style: none;
  padding: 6px 0;
  width: 100%;
  &::placeholder {
    opacity: 0.6;
  }
}
</style>
