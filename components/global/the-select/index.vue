<template>
  <div class="the-select">
    <uc-btm-sheet
      v-if="isMobile"
      :label="label"
      :options="options"
      @change="onChange"
    />
    <uc-select v-else />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "nuxt-property-decorator";
import UcBtmSheet from "./components/uc-btm-sheet.vue";
import UcSelect from "./components/uc-select.vue";
import { Option } from "./interface";

@Component({ components: { UcBtmSheet, UcSelect } })
export default class TheSelect extends Vue {
  @Prop({ required: false, default: "" })
  public label!: string;

  @Prop({ required: true, default: [] })
  public options!: Option[];

  public isMobile = true;

  public mounted() {
    this.setIsMobile();
  }

  public setIsMobile() {
    this.isMobile = document.getElementById("app")!.clientWidth < 768;
  }

  public onChange(val: any) {
    this.$emit("change", val);
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
</style>
