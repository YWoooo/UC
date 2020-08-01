<template>
  <v-app>
    <div>
      <NotLoginNav />
      <nuxt />
    </div>
    <GAlert />
  </v-app>
</template>
<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import NotLoginNav from "@/components/layouts/NotLoginNav.vue";
@Component({
  components: { NotLoginNav },
})
export default class notLogin extends Vue {}
</script>
<style>
</style>
