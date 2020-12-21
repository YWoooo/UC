<template>
  <v-app>
    <div>
      <NotLoginNav />
      <nuxt />
    </div>
    <v-slide-y-transition :group="true" >
      <TheMessage 
        v-for="(msg, index) in msgs" 
        :key="index"
        :msg="msg"
        transition="slide-x-transition" />           
    </v-slide-y-transition>
  </v-app>
</template>

<script lang='ts'>
import { Component, Vue } from "nuxt-property-decorator";
import NotLoginNav from "@/components/layouts/NotLoginNav.vue";
import TheMessage from "@/components/global/the-message/index.vue";
import { theMessageStore } from "~/store";

@Component({ components: { NotLoginNav, TheMessage } })
export default class notLogin extends Vue {
  public get msgs() {
    return theMessageStore.msgs
  }
}
</script>
