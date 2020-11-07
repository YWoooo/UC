<template>
    <div class="upload-card">
        <div class="title">Proof of bank account</div>
        <div class="subtitle">
            To verify, we need the proof of bank account imformation,
            which should include:
        </div>
        <div class="check-item" v-for="(item, index) in checkItems" :key="index">
            <v-icon class="icon">mdi-checkbox-marked-circle-outline</v-icon>
            {{ item }}
        </div>
        <div class="imgs">
          <v-icon class="plus" @click="addImg">mdi-plus</v-icon>
          <TheUploadImg 
            v-for="(item, index) in uploadImgItems" 
            :key="item.id"
            ref="uploadImg"
            class="upload-img"
            :msg="'Upload the proof here.'"
            @deleteImg="deleteImg(index)" />             
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from "nuxt-property-decorator";
import TheUploadImg from "@/components/global/the-upload-img/index.vue";

class UploadImgItem  {
  constructor(
    public id: number = new Date().getTime(),
    public isShow: boolean = false,
  ) {}
}

@Component({ components: { TheUploadImg }})
export default class BankAccountBindingUploadCard extends Vue {
  @Ref('uploadImg') readonly uploadImg!: TheUploadImg[];

  public checkItems = [
      'Your Full Name,',
      'Bank Name and Bank Seals, and',
      'Issue date.'
  ]
  public uploadImgItems = [new UploadImgItem()]
  public addImg() {
    if (this.uploadImgItems.length <= 2){
      this.uploadImgItems.push(new UploadImgItem())
      this.scrollDown()
    }
  }
  public scrollDown() {
    const nuxt = document.getElementsByClassName('nuxt')[0] as HTMLElement
    if (nuxt) setTimeout(() => nuxt.scrollBy({
      top: 9999,
      behavior: 'smooth'
    }), 0)
  }
  public deleteImg(index: number) {
    if(this.uploadImgItems.length >= 2)
      this.uploadImgItems.splice(index, 1)
  }
  public getfiles() {
    return this.uploadImg.map((e) => e.file);
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.subtitle {
  font-size: $font-size-small;
  margin: 12px 0;
}
.check-item {
  font-size: $font-size-small;
}
.icon {
  font-size: inherit;
}
.imgs {
  margin-top: $normal-spacing;
  position: relative;
}
.plus {
  background: $color-background;
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  font-size: 36px;
  padding: 4px;
  position: absolute;
  right: 0;
  top: -18px;
  z-index: 1;
}
.upload-img {
  margin-top: $normal-spacing;
}
</style>
