<template>
  <TheInput
    v-model="valiCode"
    :isNumberOnly="true"
    inputmode="numeric"
    :isLocaleString="false"
    :errMsg="errMsg"
    :maxLength="6"
    :isBtn="true"
    :isBtnLoading="isBtnLoading"
    :isBtnDisabled="isBtnDisabled"
    :btnText="btnText"
    @btnClick="getCode"
  />
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "nuxt-property-decorator";
import TheInput from "@/components/global/the-input/index.vue";
import { VerifyCode } from '@/interfaces/VerifyCode'

@Component({ components: { TheInput } })
export default class TheInputValicode extends Vue {
  @Prop({ required: true, default: 'email' })
  public receiverType!: VerifyCode.ReceiverType

  public valiCode = "";
  public errMsg = "";
  public isBtnLoading = false;
  public cd = 0;

  public get UserInfo() {
    return this.$store.state.UserInfoStore.userInfo
  }
  public get isBtnDisabled() {
    return this.errMsg !== "" || this.cd > 0;
  }
  public get btnText() {
    return this.cd > 0 ? `${this.cd}s` : "Get";
  }
  public get receiver() {
    const { email, phoneAreaCode, phone } = this.UserInfo
    return this.receiverType === 'email'
      ? email
      : `${phoneAreaCode} ${phone}`
  }
  
  public async getCode() {
    if (this.isBtnDisabled) {
      return;
    }
    try {
      const { receiver, receiverType } = this
      const res = await this.$api.getVerifyCode({
        receiver,
        receiverType
      })
      if (res?.error?.name) {
        throw new Error(res.error.name)
      }
      this.$message(this.setMsg(), 'success', 6000)
      this.countDown();
    } catch (e) {
      this.onGetCodeError(e)
    }
  }
  public setMsg() {
    const in10mins = 'it only valid in 10 minutes.'
    return this.receiverType === 'email'
      ? `A verify code has been sent to ${this.receiver},` + in10mins
      : `A verify code has been sent to +${this.UserInfo.phoneAreaCode}-${this.UserInfo.phone} by message,` + in10mins
  }
  public onGetCodeError(e: Error) {
    if (e.message === 'InCooldownError') {
      this.$message('Sorry, but please wait about 60 seconds.', 'error')
    }
    console.error(e)
  }

  @Watch("valiCode")
  public onvaliCode() {
    this.$store.commit('TheAuthStore/setCode', this.valiCode)
    this.testValiCode();
  }
  public testValiCode() {
    this.errMsg = "";
    if (!this.valiCode) {
      return (this.errMsg = "Required.");
    }
    if (this.valiCode.length < 6) {
      return (this.errMsg = "Should be 6 numbers.");
    }
  }

  public countDown() {
    this.cd = 60;
    const timer = setInterval(() => {
      this.cd > 0 ? this.cd-- : clearInterval(timer);
    }, 1000);
  }
}
</script>
