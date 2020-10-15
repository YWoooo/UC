<template>
  <div class="uc-select">
    <div class="label">{{ label }}</div>
    <v-select 
      :items="options"
      item-text="label"
      item-value="value"
      @change="onChange"></v-select>
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
::v-deep .v-text-field {
  padding-top: 6px;
}
::v-deep .v-select__selections {
  height: 36px;
}
::v-deep .v-select__selection--comma {
  margin: 0;
}
</style>
