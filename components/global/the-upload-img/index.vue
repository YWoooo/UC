<template>
  <div class="the-upload-img" @click="inputImg">
    <div v-if="!imgUrl" class="placeholder">
      <div>
        <v-icon class="logo">mdi-camera</v-icon>
        <br>
        {{ msg }}
        <div class="hint">{{ tip }}</div>
      </div>
    </div>
    <div v-else class="img-wrapper">
      <img class="img" :src="imgUrl" >
    </div>
    <div class="actions">
      <v-icon 
        class="action">
        mdi-pencil-outline
      </v-icon>
      <v-icon 
        class="action" 
        @click.stop="deleteImg">
        mdi-trash-can-outline
      </v-icon>   
      <slot></slot>       
    </div>        
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import getThumbnailAndFile from '@/utils/get-thumbnail-and-file.ts';

@Component
export default class TheUploadImg extends Vue {
  @Prop({ required: false, default: '' })
  public defalutImgUrl!: string;

  @Prop({ required: false, default: 'Upload image here.' })
  public msg!: string;

  public imgUrl = ''
  public file: File | undefined = undefined
  public tip = '.png, .jepg, .jpg, < 10MB'

  public beforeMount() {
    if (this.defalutImgUrl) {
      this.imgUrl = this.defalutImgUrl
    }
  }
  public async inputImg() {
    try {
      const { thumbnailUrl, file } = await getThumbnailAndFile()
      this.imgUrl = thumbnailUrl;
      this.file = file
      this.$emit('change', file)
    } catch (e) {
      console.log(e)
    }
  }
  public deleteImg() {
    this.imgUrl = ''
    this.$emit('deleteImg')
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles/index.scss";
.the-upload-img {
  cursor: pointer;
  height: 250px;
  position: relative;
}
.placeholder {
  align-items: center;
  border: 1px dashed $color-border;
  display: flex;
  height: 100%;
  justify-content: center;
  text-align: center;
  width: 100%;
}
.logo {
  font-size: 56px;
}
.hint {
  font-size: $font-size-small;
  margin-top: 10px;
  opacity: 0.5;
}
.img-wrapper {
  border: 1px solid $color-border;
  border-radius: $normal-radius;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.actions {
  bottom: 12px;
  position: absolute;
  right: 12px;
}
.action {
  background: $color-white;
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  margin: 4px;
  padding: 6px;
}
.img {
  height: 100%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
