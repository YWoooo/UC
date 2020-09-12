<template>
  <div class="ui-demo">
    This is a ui-demo page.
    <TheInput :label="'The input'" />
    <TheInput :label="'The short input'" :isShort="true" :btnText="'GET'" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import TheInput from "@/components/global/the-input/index.vue";

@Component({
  components: { TheInput },
})
export default class UiDemo extends Vue {}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.ui-demo {
  padding: $normal-spacing;
}
</style>
