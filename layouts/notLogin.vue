<template>
  <v-app>
    <div>
      <notLoginNav />
      <nuxt />
    </div>
    <GAlert />
  </v-app>
</template>
<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import notLoginNav from "@/layouts/components/notLoginNav.vue";
@Component({
  components: { notLoginNav },
})
export default class notLogin extends Vue {}
</script>
<style>
</style>
