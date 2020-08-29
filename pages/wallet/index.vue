<template>
  <div class="wallet">
    <div>
      <WalletOverview />
      <WalletMenu />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import WalletOverview from "@/components/wallet/WalletOverview.vue";
import WalletMenu from "@/components/wallet/WalletMenu.vue";
@Component({
  components: { WalletOverview, WalletMenu },
})
export default class Wallet extends Vue {}
</script>
<style lang='scss' scoped>
@import '~/assets/styles/index.scss';

.wallet {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
}
</style>
