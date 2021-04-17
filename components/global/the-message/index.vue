<template>
  <v-alert 
    class="the-message"
    :type="msg.type"
    dense
  >{{ msg.content }}</v-alert>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { Msg } from '@/interfaces/TheMessage';

@Component
export default class TheMessage extends Vue {
  @Prop({ required: true })
  public msg!: Msg;
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.the-message {
  border-radius: 0;
  margin-bottom: 1px;
  width: 100%;
}
</style>
