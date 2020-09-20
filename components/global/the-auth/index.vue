<template>
  <v-dialog v-model="isShow">
    <div class="the-auth">
      <div class="header">Verification</div>
      <div class="inner">
        <div class="sub">To protect your account, please verify your identity first.</div>
        <div class="tabs">
          <div class="tab" :class="{tabActive: formData.type === 1}" @click="formData.type = 1">
            <v-icon>mdi-email-outline</v-icon>
          </div>
          <div class="tab" :class="{tabActive: formData.type === 2}" @click="formData.type = 2">
            <v-icon>mdi-cellphone-iphone</v-icon>
          </div>
        </div>
        <Transition mode="out-in">
          <The-email-auth key="email" v-if="formData.type === 1" :email="formData.email" />
          <The-phone-auth key="phone" v-else :phone="formData.phone" />
        </Transition>
        <TheSubmit
          :text="'Verify'"
          :isBtnLoading="submitState.isBtnLoading"
          :isDisabled="submitState.isDisabled"
          @submit="submit"
        />
      </div>
    </div>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import TheEmailAuth from "./the-email-auth.vue";
import ThePhoneAuth from "./the-phone-auth.vue";
import TheSubmit from "@/components/global/the-submit/index.vue";

@Component({ components: { TheEmailAuth, ThePhoneAuth, TheSubmit } })
export default class TheAuth extends Vue {
  public isShow = true;
  public formData = {
    type: 1, // 1: email, 2: phone
    email: "test1@gmail.com",
    phoneAreaCode: "886",
    phone: "912345678",
    validationCode: "",
  };
  public errMsg = {
    validationCode: "",
  };
  @Watch("formData.validationCode")
  public onValidationCode() {
    if (!this.formData.validationCode) {
      this.errMsg.validationCode = "Required.";
    }
  }
  public inputBtnState = {
    isBtnLoading: false,
    isBtnDisabled: false,
  };
  public submitState = {
    isBtnLoading: false,
    isBtnDisabled: false,
  };
  public submit() {}
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.the-auth {
  background: $color-white;
  font-size: $font-size-normal;
  padding: 48px 20px 1px;
}
.header {
  font-size: $font-size-bg;
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
  border: 1px solid $color-black;
  border-radius: 36px;
  color: $color-white;
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
