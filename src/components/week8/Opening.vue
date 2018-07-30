<template lang="pug">
  .opening
    .star(ref="star")
      .star__top
      .star__bottom
    .circle(ref="circle")
    .square(ref="square")
    .text-block
      .text-block__title GEOMETRY PERSON
      .text-block__description find your core personality type in shapes!
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

export default Component({})(
  class Opening extends Vue {
    mounted() {
      const opening = this.$refs.opening;
      const star = this.$refs.star;
      const circle = this.$refs.circle;
      const square = this.$refs.square;
      const vm = this;
      const screenConfig = {
        opening: {
          duration: 5,
          scale: 1.6,
          starScale: .6,
        },
      };
      // 旋轉
      TweenLite.to(star, screenConfig.opening.duration, {rotation: 360, ease: Power2.easeOut});
      TweenLite.to(circle, screenConfig.opening.duration, {rotation: 360, ease: Power2.easeOut});
      TweenLite.to(square, screenConfig.opening.duration, {rotation: -360, ease: Power2.easeOut});
      // 圓形縮放
      TweenLite.to(circle, screenConfig.opening.duration / 2, {css: {scale: 1.1}});
      TweenLite.to(circle, screenConfig.opening.duration / 2, {css: {scale: 1}, delay: screenConfig.opening.duration / 2});
      // 結束放大
      TweenLite.to(square, screenConfig.opening.scale, {css: {scale: 7}, ease: Power2.easeOut, delay: screenConfig.opening.duration - 1 });
      TweenLite.to(circle, screenConfig.opening.scale, {css: {scale: 7}, ease: Power2.easeOut, delay: screenConfig.opening.duration - .7});
      TweenLite.to(star, screenConfig.opening.starScale, {
        css: {scale: 7},
        ease: Power2.easeOut,
        delay: screenConfig.opening.duration - .4,
        onComplete: () => {
          vm.$emit('completed');
        },
      });
    };
  }
);
</script>

<style lang="scss" scoped>
@import '../../assets/scss/week8/_utils.scss';

.opening {
  width: 100vw;
  height: 100vh;
  background-color: $primary-black;
}
.star {
  z-index: 10;
  @extend %center;
  &__top {
    @include star-top;
    &::before {
      @include star-before;
    }
  }
  &__bottom {
    @include star-top;
    transform: rotate(180deg);
    &::before {
      @include star-before;
    }
  }
}
.circle {
  @extend %center;
  width: 500px;
  height: 500px;
  z-index: 9;
  border-radius: 50%;
  background-color: $secondary-red;
}
.square {
  @extend %center;
  width: 400px;
  height: 400px;
  z-index: 8;
  background-color: $white;
}
.text-block {
  @extend %center;
  display: table;
  text-align: center;
  color: #fff;
  z-index: 20;
  &__title {
    font-weight: 700;
    font-size: 64px;
  }
  &__description {
    margin-top: 20px;
    font-size: 24px;
  }
}
</style>
