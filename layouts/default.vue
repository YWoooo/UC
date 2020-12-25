<template>
  <v-app>
    <div class="view">
      <DefaultAppBar />
      <div class="nuxt">
        <nuxt />
      </div>
      <DefaultBottomNav />
      <div class="mask">
        <v-slide-y-transition :group="true" >
          <TheMessage 
            v-for="(msg, index) in msgs" 
            :key="index"
            :msg="msg"
            transition="slide-x-transition" />           
        </v-slide-y-transition>
      </div>    
    </div>
    <TheAuth />
  </v-app>
</template>

<script lang='ts'>
import { Component, Vue } from "nuxt-property-decorator";
// Layout components.
import DefaultAppBar from "@/components/layouts/DefaultAppBar.vue";
import DefaultBottomNav from "@/components/layouts/DefaultBottomNav.vue";
// Globle components.
import TheMessage from "@/components/global/the-message/index.vue";
import TheAuth from "@/components/global/the-auth/index.vue";
// For the-message.
import { theMessageStore } from "~/store";

@Component({ 
  components: { DefaultAppBar, DefaultBottomNav, TheMessage, TheAuth },
  middleware: 'checkIsLogin',
})
export default class DefaultLayout extends Vue {
  public get msgs() {
    return theMessageStore.msgs
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/index.scss";
.view {
  background-color: $color-background;
  color: $color-font-normal;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  justify-content: space-between;
}
.nuxt {
  flex: 1;
  height: calc(100vh - 48px - 56px); // 48px & 56px as the height of DefaultAppBar & DefaultBottomNav.
  overflow: scroll;
}
.mask {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
