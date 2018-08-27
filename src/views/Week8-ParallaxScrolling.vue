<template lang="pug">
  .parallax-scrolling
    Opening(v-if="step === 1", @completed="nextStep")
    QuestionOne(v-else-if="step === 2")
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { TweenLite } from 'gsap';
import Opening from '@/components/week8/Opening.vue';
import QuestionOne from '@/components/week8/QuestionOne.vue';

export default Component({
  components: {
    Opening,
    QuestionOne,
  },
})(
  class ParallaxScrolling extends Vue {
    step = 2;
    nextStep() {
      this.step ++;
    };
  }
);
</script>
