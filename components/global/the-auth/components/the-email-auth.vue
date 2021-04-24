<template>
  <div>
    <TheInput v-model="email" :isReadOnly="true" />
    <TheInputValicode 
      :receiverType="'email'" 
      @enter="$emit('enter')" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import TheInput from "@/components/global/the-input/index.vue";
import TheInputValicode from "./the-input-valicode.vue";

@Component({ components: { TheInput, TheInputValicode } })
export default class TheEmailAuth extends Vue {
  public email = "";
  public mounted() {
    this.email = this.$store.state.UserInfoStore.userInfo.email
  }
}
</script>
