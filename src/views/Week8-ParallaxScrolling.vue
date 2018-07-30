<template lang="pug">
  .parallax-scrolling
    Opening(v-if="step === 1", @completed="nextStep")
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { TweenLite } from 'gsap';
import Opening from '@/components/week8/Opening.vue';

export default Component({
  components: {
    Opening,
  },
})(
  class ParallaxScrolling extends Vue {
    step = 1;
    nextStep() {
      this.step ++;
    };
  }
);
</script>

<style lang="scss" scoped>
