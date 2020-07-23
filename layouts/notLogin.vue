<template>
  <v-app>
    <div>
      <nuxt />
    </div>
    <GAlert />
  </v-app>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import GAlert from "@/components/global/GAlert.vue";
@Component({
  components: {
    GAlert,
  },
})
export default class noLogin extends Vue {}
</script>

<style>
</style>
