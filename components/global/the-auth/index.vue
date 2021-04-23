<template>
  <div v-if="isShow">
    <v-dialog :value="isShow" @click:outside="closeAuth">
      <div class="the-auth">
        <div class="header">Verification</div>
        <div class="inner">
          <div class="sub">
            To protect your account, please verify your identity first.
          </div>
          <div class="tabs">
            <div
              class="tab"
              :class="{ tabActive: isEmailAuth }"
              @click="setReceiverType('email')"
            >
              <v-icon>mdi-email-outline</v-icon>
            </div>
            <div
              class="tab"
              :class="{ tabActive: !isEmailAuth }"
              @click="setReceiverType('phone')"
            >
              <v-icon>mdi-cellphone-iphone</v-icon>
            </div>
          </div>
          <Transition mode="out-in">
            <The-email-auth key="email" v-if="isEmailAuth" />
            <The-phone-auth key="phone" v-else />
          </Transition>
          <TheSubmit
            :text="'Verify'"
            :isBtnLoading="isBtnLoading"
            :isDisabled="isDisabled"
            @submit="submitAuth"
          />
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import TheEmailAuth from "./components/the-email-auth.vue";
import ThePhoneAuth from "./components/the-phone-auth.vue";
import TheSubmit from "@/components/global/the-submit/index.vue";
import { VerifyCode } from '@/interfaces/VerifyCode'

@Component({ components: { TheEmailAuth, ThePhoneAuth, TheSubmit } })
export default class TheAuth extends Vue {
  public isBtnLoading = false;
  public receiverType: VerifyCode.ReceiverType = 'email';

  public get TheAuthStore() {
    return this.$store.state.TheAuthStore
  }
  public get userInfo() {
    return this.$store.state.UserInfoStore.userInfo
  }
  public get isEmailAuth() {
    return this.receiverType === 'email'
  }
  public get isShow() {
    return this.TheAuthStore.isShow
  }
  public get isDisabled() {
    return !this.$store.getters['TheAuthStore/canSubmit']
  }

  public closeAuth() {
    this.$store.dispatch('TheAuthStore/closeAuth');
  }
  public setReceiverType(receiverType: VerifyCode.ReceiverType) {
    this.receiverType = receiverType;
  }
  public submitAuth() {
    const { valicode: code } = this.TheAuthStore
    const { email, phoneAreaCode, phone } = this.userInfo
    const receiver = this.isEmailAuth
      ? email 
      : `${phoneAreaCode} ${phone}`
    const { receiverType } = this

    this.$emit('submitAuth', {
      code,
      receiver,
      receiverType,
    })
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.the-auth {
  background: $color-background;
  color: $color-primary;
  font-size: $font-size-normal;
  padding: 48px 20px 1px;
}
.header {
  font-size: $font-size-title;
  font-size: 32px;
}
.sub {
  margin-bottom: 24px;
  padding: 12px 0;
}
.tabs {
  display: flex;
  margin-bottom: 24px;
}
.tab {
  align-items: center;
  border: 1px solid $color-border;
  border-radius: 36px;
  color: $color-primary;
  cursor: pointer;
  display: inline-flex;
  height: 32px;
  justify-content: center;
  margin-right: 16px;
  opacity: 0.2;
  width: 56px;
}
.tabActive {
  background: transparent;
  opacity: 0.8;
}
</style>
