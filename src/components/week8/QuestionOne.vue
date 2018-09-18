<template lang="pug">
.question-one
  .q-session(ref="q-session")
    .q-session__wrapper
      .q-session__number Q1
      .q-session__title If one day you get a gift that can change the rule of the world, which ability will you choose?
      .q-session__des Choose the answer appeared in your mind instantly
      ul.q-session__options(@click="handleAnswer($event)")
        li(
          v-for="(item, index) in option"
          :data-value="index + 1"
          :key="index") {{ item }}
  .animation-session(ref="animation-session")
    .animation-session__square(ref="square" v-show="isGeometryShow")
    .animation-session__trangle(ref="trangle" v-show="isGeometryShow")
    .animation-session__circle(ref="circle" v-show="isGeometryShow")
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

export default Component({})(
  class QuestionOne extends Vue {
    option = [
      "Destroy all humans in the world",
      "Make the war never happened",
      "You won’t get old and live forever",
    ];

    isGeometryShow = true;

    handleAnswer($event) {
      const animationSession = this.$refs['animation-session'];
      const selected = $event.target.dataset.value;

      if (!selected) { return; }

      this.isGeometryShow = false;
      TweenLite.to(animationSession, 1,
      {
        css: {transform: 'translateX(0)'},
        onComplete: () => {
          this.$emit('completed');
        },
      });
    };
    mounted() {
      const vm = this;
      const qSesstion = vm.$refs['q-session'];
      const animationSession = vm.$refs['animation-session'];
      const square = vm.$refs.square;
      const trangle = vm.$refs.trangle;
      const circle = vm.$refs.circle;

      TweenLite.to(qSesstion, 1, {css: {opacity: '1'}});
      TweenLite.to(animationSession, 1, {css: {transform: 'translateX(60%)'}});

      TweenLite.to(square, 2, {css: {top: '100px'}, ease: Power3.esaeOut, delay: 1});
      TweenLite.to(trangle, 2, {css: {top: '300px'}, ease: Power2.esaeOut, delay: 1});
      TweenLite.to(circle, 2, {css: {bottom: '-100px'}, ease: Power2.esaeOut, delay: 1});

      TweenLite.to(square, 4, {rotation: 360, ease: Power3.esaeOut, delay: 3});
      TweenLite.to(trangle, 4, {rotation: -360, ease: Power2.esaeOut, delay: 3});
      TweenLite.to(circle, 4, {css: {x: '+=25', y: '+=40'}, ease: Power2.esaeOut, delay: 3});
    };
  }
);
</script>

<style lang="scss" scoped>
@import '../../assets/scss/week8/_utils.scss';

.question-one {
  width: 100vw;
  height: 100vh;
  background-color: $primary-black;
  position: relative;
  overflow: hidden;
}

.q-session {
  height: 100%;
  width: 60%;
  background-color: $primary-black;
  opacity: 0;
  &__wrapper {
    width: 480px;
    padding: 40px 30px;
  }
  &__number {
    margin-bottom: 20px;
    font-size: 64px;
    font-weight: 700;
    color: $secondary-yellow;
  }
  &__title {
    margin-bottom: 20px;
    font-size: 36px;
    font-weight: 700;
    line-height: 48px;
    color: $white;
  }
  &__des {
    margin-bottom: 30px;
    font-size: 24px;
    color: $secondary-red;
    line-height: 1.5;
  }
  &__options > li {
    margin: 0 0 10px 0;
    padding: 10px 30px;
    border: 2px solid $white;
    border-radius: 30px;
    font-size: 20px;
    text-align: center;
    color: $white;
    cursor: pointer;
    transition: all .4s;
    &:hover {
      background-color: $white;
      color: $primary-black;
    }
  }
}

.animation-session {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: $secondary-red;
  transform: translateX(100%);
  &__square {
    width: 200px;
    height: 200px;
    position: absolute;
    background-color: $secondary-yellow;
    top: 100vh;
    left: 50px;
  }
  &__trangle {
    width: 0;
    height: 0;
    position: absolute;
    top: calc(100vh + 100px);
    left: 25%;
    border-style: solid;
    border-width: 0px 70px 120px 70px;
    border-color: transparent transparent $white transparent;
  }
  &__circle {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    position: absolute;
    left: 15%;
    bottom: -900px;
    background-color: $primary-black;
  }
}
</style>
