<template>
  <div class="form">
    <div class="form-item">
      <TheInput :label="'Email'" v-model="formData.email" :type="'email'" :errMsg="errMsg.email" />
    </div>
    <div class="form-item">
      <TheInput
        :label="'Password'"
        v-model="formData.password"
        :type="'password'"
        :errMsg="errMsg.password"
        :maxLength="15"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import TheInput from "@/components/global/the-input/index.vue";
import isEmail from "validator/lib/isEmail";
import { regs } from "~/utils/regs";

@Component({
  components: { TheInput },
})
export default class LoginForm extends Vue {
  public showPassword = false;
  public formData = {
    email: "",
    password: "",
  };
  public errMsg = {
    email: "",
    password: "",
  };
  @Watch("formData.email")
  public validateEmail() {
    if (!this.formData.email) {
      return (this.errMsg.email = "Required.");
    }
    this.errMsg.email = isEmail(this.formData.email)
      ? ""
      : "Wrong format of email.";
  }
  @Watch("formData.password")
  public validatePassword() {
    if (!this.formData.password) {
      return (this.errMsg.password = "Required.");
    }
    this.errMsg.password = regs.password.test(this.formData.password)
      ? ""
      : "6-15 digit, with uppercase, lowercase, and number.";
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.form {
  margin-top: 40px;
}
</style>
