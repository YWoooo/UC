<template>
  <TheSubmit :isBtnLoading="isBtnLoading" :isDisabled="isSubmitDisabled" @submit="submit" />
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import TheSubmit from "@/components/global/the-submit/index.vue";

@Component({
  components: { TheSubmit },
})
export default class LoginSubmit extends Vue {
  public isBtnLoading = false;
  public isSubmitDisabled = false;
  public submit() {
    console.log(123123);
    // if (this.isSubmitDisabled) return;
    // this.isBtnLoading = true;
    // const sendData = {
    //   email: this.formData.email,
    //   password: this.formData.password,
    // };
  }
}
</script>
