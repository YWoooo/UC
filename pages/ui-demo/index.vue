<template>
  <div class="ui-demo">
    This is a ui-demo page.
    <TheInput label="The input" />
    <TheInput label="The short input" isShort="true" btnText="GET" />
    <TheSelect
      label="The Select"
      :options="theSelect.options"
      @change="onChange"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import TheInput from "@/components/global/the-input/index.vue";
import TheSelect from "@/components/global/the-select/index.vue";

@Component({ components: { TheInput, TheSelect } })
export default class UiDemo extends Vue {
  public theSelect = {
    options: [
      { label: "M123456", value: 111 },
      { label: "M123452", value: 222 },
      { label: "M123451", value: 333 },
      { label: "dM123456dd", value: 444 },
      { label: "M123453", value: 555 },
      { label: "M123455", value: 666 },
    ],
  };
  public onChange(val: any) {
    console.log(val);
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.ui-demo {
  padding: $normal-spacing;
}
</style>
