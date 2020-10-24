<template>
  <div class="nav">
    <nuxt-link class="nav-item" v-if="$route.path !== '/register'" to="/register">Register</nuxt-link>
    <nuxt-link class="nav-item" v-if="$route.path !== '/login'" to="/login">Login</nuxt-link>
  </div>
</template>
<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class notLogin extends Vue {}
</script>
<style lang="scss" scoped>
@import "~/assets/styles/index.scss";
.nav {
  padding: 12px;
  text-align: right;
}
.nav-item {
  color: $color-font-normal;
}
</style>
