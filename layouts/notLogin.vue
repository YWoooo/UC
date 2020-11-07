<template>
  <v-app>
    <div>
      <NotLoginNav />
      <nuxt />
    </div>
    <TheMessage />
  </v-app>
</template>

<script lang='ts'>
import { Component, Vue } from "nuxt-property-decorator";
import NotLoginNav from "@/components/layouts/NotLoginNav.vue";
import TheMessage from "@/components/global/the-message/index.vue";

@Component({ components: { NotLoginNav, TheMessage } })
export default class notLogin extends Vue {}
</script>
