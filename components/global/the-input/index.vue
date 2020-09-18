<template>
  <div>
    <div class="label" v-if="label">{{ label }}</div>
    <div class="input-outer">
      <div class="input-wrapper">
        <span v-if="isDollar && isLocalValue">$</span>
        <input
          :type="inputType"
          class="input"
          v-model="localValue"
          :placeholder="placeholder"
          :maxLength="maxLength"
          @input="onInput"
          @focus="isClearBtnShow = true"
          @blur="isClearBtnShow = false"
          @keypress.enter="onEnter"
        />
        <span class="input-icon" @click="togglePwd" v-if="type === 'password'">
          <transition mode="out-in">
            <v-icon key="eye" v-if="inputType === 'password'">mdi-eye-outline</v-icon>
            <v-icon key="eye-off" v-if="inputType === 'text'">mdi-eye-off-outline</v-icon>
          </transition>
        </span>
        <transition>
          <span
            class="input-icon"
            v-show="isLocalValue && isClearBtnShow"
            @mousedown="clearValue"
          >&#9932;</span>
        </transition>
      </div>
      <v-btn
        class="input-btn"
        v-if="isBtn"
        :depressed="true"
        :loading="isBtnLoading"
        :disabled="isBtnDisabled"
        @click="onBtnClick"
      >{{ btnText }}</v-btn>
    </div>
    <div class="err-msg">
      <transition>
        <div v-if="errMsg">{{ errMsg }}</div>
      </transition>
    </div>
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

  @Prop({ required: false, default: false })
  public isLocaleString!: boolean;

  @Prop({ required: false, default: "" })
  public placeholder!: string;

  @Prop({ required: false, default: "" })
  public errMsg!: string;

  @Prop({ required: false, default: 30 })
  public maxLength!: number;

  @Prop({ required: false, default: false })
  public isBtn!: boolean;

  @Prop({ required: false, default: "" })
  public btnText!: string;

  @Prop({ required: false, default: false })
  public isBtnLoading!: boolean;

  @Prop({ required: false, default: false })
  public isBtnDisabled!: boolean;

  public localType = "";
  public localValue: string = "";
  public isClearBtnShow = false;

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
    this.localValue = value;
    if (this.isNumberOnly) {
      this.localValue = numberOnly(this.localValue);
    }
    if (this.isLocaleString) {
      this.localValue = (+this.localValue).toLocaleString();
    }
    this.$emit("input", this.localValue); // Always emit string I suggest, just in case.
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

  public onBtnClick() {
    this.$emit("btnClick");
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.label {
  font-size: 16px;
}
.input-outer {
  align-items: flex-end;
  display: flex;
}
.input-wrapper {
  align-items: center;
  border-bottom: 1px solid $color-black;
  display: flex;
  width: 100%;
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
.input-btn {
  background: transparent !important;
  border: 1px solid $color-black;
  color: $color-black;
  height: 42px;
  margin-left: $normal-spacing;
  width: 100px;
  z-index: 9999;
}
.err-msg {
  color: $color-err;
  height: 24px;
}
</style>
