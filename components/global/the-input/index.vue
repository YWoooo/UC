<template>
  <div>
    <div class="label" v-if="label">{{ label }}</div>
    <div class="input-wrapper">
      <span v-if="isDollar && isLocalValue">$</span>
      <input
        :type="inputType"
        class="input"
        v-model="localValue"
        :placeholder="placeholder"
        :maxLength="maxLength"
        @input="onInput"
        @keypress.enter="onEnter"
      />
      <span class="input-icon" @click="togglePwd" v-if="type === 'password'">
        <v-icon v-if="inputType === 'password'">mdi-eye-outline</v-icon>
        <v-icon v-else>mdi-eye-off-outline</v-icon>
      </span>
      <span class="input-icon" v-show="isLocalValue" @click="clearValue">&#9932;</span>
    </div>
    <div class="err-msg">{{ errMsg }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "nuxt-property-decorator";
import { numberOnly } from "@/utils/numberOnly";

@Component
export default class TheInput extends Vue {
  @Prop({ required: false, default: "" })
  public label!: string;

  @Prop({ required: false, default: "" })
  public value!: string;

  @Prop({ required: false, default: "text" })
  public type!: "text" | "tel" | "email" | "password";

  @Prop({ required: false, default: false })
  public isNumberOnly!: boolean;

  @Prop({ required: false, default: false })
  public isDollar!: boolean;

  @Prop({ required: false, default: "" })
  public placeholder!: string;

  @Prop({ required: false, default: 30 })
  public maxLength!: number;

  @Prop({ required: false, default: "" })
  public errMsg!: string;

  public localType = "";
  public localValue = "";

  public get inputType() {
    return this.localType
      ? this.localType
      : this.isNumberOnly
      ? "tel"
      : this.type;
  }

  public get isLocalValue() {
    return this.localValue && this.localValue !== "0";
  }

  public setLocalValue(value: string) {
    this.localValue = this.isNumberOnly
      ? (+numberOnly(value)).toLocaleString()
      : value;
    this.$emit("input", this.localValue);
  }

  public onInput(event: InputEvent) {
    const value: string = (event.currentTarget as HTMLInputElement).value;
    this.setLocalValue(value);
  }

  @Watch("value")
  public onValueFromParent() {
    this.setLocalValue(this.value);
  }

  public clearValue() {
    this.localValue = "";
    this.$emit("input", this.localValue);
  }

  public onEnter() {
    this.$emit("enter");
  }

  public togglePwd() {
    this.localType = this.inputType === "password" ? "text" : "password";
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.label {
  font-size: 16px;
}
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
.input-icon {
  cursor: pointer;
  margin-left: 12px;
}
.err-msg {
  color: $color-err;
  height: 24px;
}
</style>
