<template>
  <div class="uc-btm-sheet">
    <div class="dummy-input" @click="toggle">
      <div class="label">{{ label }}</div>
      <div class="input-inner">{{ choosenLabel }}</div>
      <div class="msg">{{ msg }}</div>
    </div>
    <v-bottom-sheet v-model="isVisible">
      <v-sheet class="options">
        <div
          class="option"
          v-for="item in options"
          :key="item.label"
          @click="onChange(item)"
        >
          {{ item.label }}
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { Option } from "../interface";

@Component
export default class UcBtmSheet extends Vue {
  @Prop({ required: false, default: "" })
  public label!: string;

  @Prop({ required: true, default: [] })
  public options!: Option[];

  @Prop({ required: false })
  public defaultOption!: Option;

  @Prop({ required: false, default: '' })
  public msg!: string;

  @Prop({ required: false, default: false })
  public isReadOnly!: boolean;

  public isVisible = false;
  public choosenLabel: string = '';

  public mounted() {
    if (this.defaultOption) {
      this.setValue(this.defaultOption)
    }
  }

  public onChange(option: Option) {
    this.toggle();
    this.setValue(option)
  }  
  public toggle() {
    if (this.isReadOnly) {
      return
    }
    this.isVisible = !this.isVisible;
  }
  public setValue(option: Option) {
    this.$emit('change', option.value)
    this.choosenLabel = option.label
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.uc-btm-sheet {
  color: $color-font-normal;
}
.label {
  font-size: $font-size-normal;
}
.input-inner {
  align-items: center;
  border-bottom: 1px solid $color-border;
  display: flex;
  font-size: $font-size-normal;
  height: 37px;
  padding: 6px 0;
  width: 100%;
}
.msg {
  font-size: $font-size-small;
  height: 18px;
  margin-top: 4px;
}
.options {
  max-height: 80vh;
  overflow: scroll;
  padding: 0 40px;
}
.option {
  align-items: center;
  color: $color-font-normal;
  display: flex;
  font-size: 20px;
  height: 80px;
  justify-content: center;
  position: relative;
  &::after {
    background: rgba(0, 0, 0, 0.1);
    content: "";
    display: inline-block;
    height: 1px;
    left: 50%;
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    width: 40px;
  }
}
</style>
