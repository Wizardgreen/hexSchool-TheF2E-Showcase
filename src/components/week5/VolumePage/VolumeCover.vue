<template lang="pug">
  .volume-cover
    img(:src="imgSrc")
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

export default Component({
  props: {
    imgSrc: {
      type: String,
      require: true,
    },
  },
})(
  class VolumeCover extends Vue {}
)
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/week5/_utils.scss';

.volume-cover {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  @extend %glassify;
  > img {
    width: 90%;
    height: 90%;
    border-radius: 5px;
  }
}
</style>

