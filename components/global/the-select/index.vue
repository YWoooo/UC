<template>
  <div v-show="isVisible" class="the-select">
    <uc-btm-sheet
      v-if="isMobile"
      :label="label"
      :options="options"
      :defaultOption="defaultOption"
      @change="onChange"
    />
    <uc-select 
      v-else
      :label="label"
      :options="options"
      :defaultOption="defaultOption"
      @change="onChange"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Model } from "nuxt-property-decorator";
import UcBtmSheet from "./components/uc-btm-sheet.vue";
import UcSelect from "./components/uc-select.vue";
import { Option } from "./interface";

@Component({ components: { UcBtmSheet, UcSelect } })
export default class TheSelect extends Vue {
  @Model('change')
  readonly value!: any
  
  @Prop({ required: false, default: "" })
  public label!: string;

  @Prop({ required: true, default: [] })
  public options!: Option[];

  @Prop({ required: false })
  public defaultOption!: Option;

  // TODO: fix the deleying of visibility.
  public isVisible = false;
  public isMobile = true;

  public mounted() {
    this.setIsMobile();
    this.isVisible = true;
  }

  public setIsMobile() {
    this.isMobile = document.getElementById("app")!.clientWidth < 768;
  }

  public onChange(val: any) {
    this.$emit("change", val);
  }
}
</script>
