<template>
  <div class="the-success-page">
    <v-icon class="logo">{{ `mdi-${successPageConfig.mdiIcon}` }}</v-icon>
    <div class="uc-title">{{ successPageConfig.title }}</div>
    <div class="subtitle">
      {{ successPageConfig.subtitle1 }} <br>
      {{ successPageConfig.subtitle2 }}
      </div>
    <div class="btns">
      <NuxtLink :to="successPageConfig.btnPri.url">
        <v-btn class="btn btn-pri">{{ successPageConfig.btnPri.text }}</v-btn>
      </NuxtLink>
      <NuxtLink :to="successPageConfig.btnSub.url">
        <v-btn class="btn btn-sub">{{ successPageConfig.btnSub.text }}</v-btn>  
      </NuxtLink>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { SuccessPageConfig } from '@/interfaces/TheSuccessPage';

@Component
export default class TheSuccessPage extends Vue {
  @Prop({ required: true })
  public successPageConfig!: SuccessPageConfig;
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.the-success-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  text-align: center;
  width: 100%;
}
.logo {
  font-size: 72px;
  width: 100%;
  &::after {
    display: none;
  }
}
.uc-title {
  font-size: $font-size-title;
  margin-top: 8px;
}
.subtitle {
  font-size: $font-size-small;
  margin-top: 10px;
}
.btns {
  display: flex;
  justify-content: center;
  margin-top: 72px;
}
.btn {
  margin: 0 10px;
  text-transform: unset;
  width: 100px;
}
.btn-pri {
  background: $color-primary !important;
  color: $color-font-white;
}
</style>
