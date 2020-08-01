<template>
  <v-app>
    <div class="view">
      <nuxt />
      <defaultNav />
    </div>
    <GAlert />
  </v-app>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import DefaultNav from "@/layouts/components/DefaultNav.vue";

@Component({
  components: { DefaultNav },
})
export default class defaultLayout extends Vue {}
</script>
<style lang="scss" scoped>
.view {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
}
</style>
