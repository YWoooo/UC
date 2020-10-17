<template>
  <div class="the-input-phone">
    <div class="area-codes">
      <TheSelect 
        v-model="areaCodeLocal"
        :options="areaCodes"
        :defaultOption="{ 
          label: `+${areaCode}`, 
          value: areaCode 
        }" />
    </div>
    <TheInput 
      class="the-input" 
      v-model="phoneLocal"
      type="tel"
      isNumberOnly="true"
      :errMsg="errMsgPhone" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "nuxt-property-decorator";
import TheSelect from "@/components/global/the-select/index.vue";
import TheInput from "@/components/global/the-input/index.vue";
import AreaCodes from './area-codes';
import isMobilePhone from "validator/lib/isMobilePhone";

@Component({ components: { TheSelect, TheInput }})
export default class ThePhoneAuth extends Vue {
  @Prop({ required: true, default: '' })
  public areaCode!: string;

  @Prop({ required: true, default: '' })
  public phone!: string;

  public areaCodes = AreaCodes;
  public areaCodeLocal = ""
  public phoneLocal = "";
  public errMsgPhone = ""

  public mounted() {
    this.areaCodeLocal = this.areaCode;
    this.phoneLocal = this.phone;
  }

  @Watch('areaCodeLocal')
  public onAreaCodeInput() {
    this.$emit('update:areaCode', this.areaCodeLocal)
  }

  @Watch('phoneLocal')
  public onPhoneInput() {
    this.$emit('update:phone', this.phoneLocal)
    this.errMsgPhone = ""
    this.errMsgPhone = isMobilePhone(this.phoneLocal)
      ? ''
      : 'Wrong format of phone.'
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.the-input-phone {
  align-items: flex-start;
  display: flex;
}
.area-codes {
  margin-right: $normal-spacing;
  width: 60px;
  ::v-deep .input-inner {
    display: inline-block;
    text-align: center;
  }
}
.the-input {
  flex: 1;
}

@media screen and (min-width: 768px) {
  .area-codes {
    width: 100px;
  }
}
</style>
