<template>
  <v-app>
    <div class="view">
      <DefaultAppBar />
      <div class="nuxt">
        <nuxt />
      </div>
      <DefaultBottomNav />
      <div class="mask">
        <v-slide-y-transition :group="true">
          <TheMessage
            v-for="(msg, index) in msgs"
            :key="index"
            :msg="msg"
            transition="slide-x-transition"
          />
        </v-slide-y-transition>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
// Layout components.
import DefaultAppBar from "@/components/layouts/DefaultAppBar.vue";
import DefaultBottomNav from "@/components/layouts/DefaultBottomNav.vue";
// Globle components.
import TheMessage from "@/components/global/the-message/index.vue";
// For the-message.
import { theMessageStore } from "~/store";

@Component({
  components: { DefaultAppBar, DefaultBottomNav, TheMessage },
  middleware: ["checkIsLogin"],
})
export default class DefaultLayout extends Vue {
  public get msgs() {
    return theMessageStore.msgs;
  }
  public async fetch() {
    try {
      await this.$store.dispatch('UserInfoStore/init')
    } catch(e) {
      console.error(e)
    }
  }
  public beforeMount() {
    this.initAccessStore()
  }

  public initAccessStore() {
    this.$store.commit('AccessStore/getAccessFromSession')
    const cb = () => this.$store.commit('AccessStore/storeAccessToSession')

    window.addEventListener('beforeunload', cb)
    this.$on('hook:beforeDestroy', () =>
      window.removeEventListener('beforeunload', cb))
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
