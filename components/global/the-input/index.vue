<template>
  <div :class="{ inputError: isError }">
    <div class="label" v-if="label">
      {{ label }}<sup>*</sup>
    </div>
    <div class="input-outer">
      <div class="input-wrapper" :class="{ inputReadOnly: isReadOnly }">
        <span v-if="isDollar && isLocalValue">$</span>
        <input
          :type="inputType"
          :inputmode="inputmode"
          class="input"
          v-model="localValue"
          :readonly="isReadOnly"
          :placeholder="placeholder"
          :maxLength="maxLength"
          @input="onInput"
          @focus="isClearBtnShow = true"
          @blur="onBlur"
          @keypress.enter="onEnter"
        />
        <span class="input-icon" @click="togglePwd" v-if="type === 'password'">
          <transition mode="out-in">
            <v-icon key="eye" v-if="inputType === 'password'"
              >mdi-eye-outline</v-icon
            >
            <v-icon key="eye-off" v-if="inputType === 'text'"
              >mdi-eye-off-outline</v-icon
            >
          </transition>
        </span>
        <transition>
          <span class="input-icon" v-show="isClearBtn" @mousedown="clearValue"
            >&#9932;</span
          >
        </transition>
      </div>
      <v-btn
        class="input-btn"
        :class="{ inputBtn__disabled: isBtnDisabled }"
        v-if="isBtn"
        :depressed="true"
        :loading="isBtnLoading"
        :disabled="isBtnDisabled"
        @click="onBtnClick"
        >{{ btnText }}</v-btn
      >
    </div>
    <div class="msg">
      <transition mode="out-in">
        <div v-if="errMsg" class="err" key="errMsg">{{ errMsg }}</div>
        <div v-if="msg && !errMsg" key="msg">{{ msg }}</div>
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
  public type!: "text" | "email" | "password";

  @Prop({ required: false, default: 'text'})
  public inputmode!: 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'

  @Prop({ required: false, default: false })
  public isNumberOnly!: boolean;

  @Prop({ required: false, default: false })
  public isRequired!: boolean;

  @Prop({ required: false, default: false })
  public isDollar!: boolean;

  @Prop({ required: false, default: false })
  public isLocaleString!: boolean;

  @Prop({ required: false, default: false })
  public isReadOnly!: boolean;

  @Prop({ required: false, default: "" })
  public placeholder!: string;

  @Prop({ required: false, default: "" })
  public msg!: string;

  @Prop({ required: false, default: "" })
  public errMsg!: string;

  @Prop({ required: false, default: 30 })
  public maxLength!: number;

  // TODO: wrap all btn prop into an option object.

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

  public get isError() {
    return this.errMsg?.length !== 0;
  }

  public get isClearBtn() {
    return !this.isReadOnly && this.isLocalValue && this.isClearBtnShow;
  }

  public mounted() {
    if (this.value) {
      this.setLocalValue(this.value);
    }
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
    this.$emit('update:errMsg', '')
    const value: string = (event.currentTarget as HTMLInputElement).value;
    this.setLocalValue(value);
  }

  public onBlur() {
    this.isClearBtnShow = false
    if (this.isRequired) {
      this.requiredTest()
    }
  }

  public requiredTest() {
    if (!this.localValue) {
      this.$emit('update:errMsg', 'Required.')
    }
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
  color: $color-primary;
  font-size: $font-size-normal;
}
.input-outer {
  align-items: flex-end;
  display: flex;
}
.input-wrapper {
  align-items: center;
  border-bottom: 1px solid $color-border;
  display: flex;
  width: 100%;
}
.input {
  border-style: none;
  color: $color-font-normal;
  font-size: $font-size-normal;
  outline-style: none;
  padding: 6px 0;
  width: 100%;
  &::placeholder {
    opacity: 0.6;
  }
}
.input-icon {
  color: inherit;
  cursor: pointer;
  margin-left: 12px;
}
.input-btn {
  background: transparent !important;
  border: 1px solid $color-border;
  color: $color-font-normal;
  font-size: $font-size-normal;
  height: 42px;
  margin-left: $normal-spacing;
  text-transform: unset;
  width: 100px;
  z-index: 9999;
}
.inputBtn__disabled {
  border-color: transparent;
}
.inputReadOnly {
  opacity: 0.4;
}
.msg {
  font-size: $font-size-sm;
  height: 24px;
}
.err { // TODO: some global classes, like .err?
  color: $color-error;
}
.inputError {
  .label {
    color: $color-error;
  }
  .input-wrapper {
    border-bottom-color: $color-error;
  }
  .input {
    color: $color-error;
  }
  .input-btn {
    border-color: $color-error;
    color: $color-error;
  }
}
</style>
