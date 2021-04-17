<template>
  <div>
    <TheInputPhone 
      :areaCode.sync="areaCode"
      :phone.sync="phone"
      :isReadOnly="true" />
    <TheInputValicode :receiverType="'phone'" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import TheInput from "@/components/global/the-input/index.vue";
import TheInputValicode from "./the-input-valicode.vue";
import TheInputPhone from '@/components/global/the-input-phone/index.vue';

@Component({ components: { TheInput, TheInputValicode, TheInputPhone } })
export default class ThePhoneAuth extends Vue {
  public areaCode = ''
  public phone = "";

  public created() {
    this.areaCode = this.$store.state.UserInfoStore.userInfo.phoneAreaCode
    this.phone = this.$store.state.UserInfoStore.userInfo.phone
  }
}
</script>
