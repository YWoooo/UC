<template>
  <div class="input-wrapper">
    <span v-if="isDollar && isLocalValue">$</span>
    <input
      :type="type"
      class="input"
      :value="localValue"
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
  public value!: string;

  @Prop({ required: false, default: false })
  public isNumberOnly!: boolean;

  @Prop({ required: false, default: false })
  public isDollar!: boolean;

  @Prop({ required: false, default: "" })
  public placeholder!: string;

  @Prop({ required: false, default: 10 })
  public maxLength!: number;

  public localValue = "";
  public type = "text";
  public numberOnly = numberOnly;

  public get isLocalValue() {
    return this.localValue && this.localValue !== "0";
  }

  public mounted() {
    if (this.isNumberOnly) {
      this.type = "tel";
    }
  }

  public onInput(event: InputEvent) {
    const value: string = (event.currentTarget as HTMLInputElement).value;
    this.localValue = this.isNumberOnly
      ? (+numberOnly(value)).toLocaleString()
      : value;
    this.$emit("input", this.localValue);
  }

  public onEnter() {
    this.$emit("enter");
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.input-wrapper {
  align-items: center;
  border-bottom: 1px solid $color-black;
  display: flex;
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
