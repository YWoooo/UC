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

@Component
export default class defaultLayout extends Vue {}
</script>
