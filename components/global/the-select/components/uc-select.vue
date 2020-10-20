<template>
  <div class="uc-select" :class="{ ucReadOnly: isReadOnly }">
    <div class="label">{{ label }}</div>
    <v-select 
      :value="defaultOption"
      :items="options"
      item-text="label"
      item-value="value"
      :disabled="isReadOnly"
      @change="onChange" />
    <div class="msg">{{ msg }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { Option } from "../interface";

@Component
export default class UcSelect extends Vue {
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

  public onChange(val: any) {
    this.$emit("change", val);
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.label {
  font-size: $font-size-normal;
}
::v-deep .v-select {
  color: $color-black;
  height: 36px;
  padding: 6px 0;
}
::v-deep .v-select__slot {
  height: 30px;
}
::v-deep .v-select__selection--comma {
  margin: 6px 0 10px;
}
::v-deep .theme--light.v-select .v-select__selection--comma {
  color: $color-black;
}
::v-deep .theme--light.v-text-field > .v-input__control > .v-input__slot {
  &::before {
    border-color: $color-black;
  }
}
.ucReadOnly {
  border-bottom: 1px solid $color-black;
}
.msg {
  font-size: $font-size-sm;
  margin-top: 4px;
}
</style>
