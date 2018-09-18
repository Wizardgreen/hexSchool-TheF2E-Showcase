<template lang="pug">
  .parallax-scrolling(:class="bgColor")
    transition(name="change" mode="out-in")
      Opening(
        v-if="step === 1"
        @completed="nextStep"
        key="opening"
      )
      QuestionOne(
        v-else-if="step === 2"
        @completed="nextStep"
        key="one"
      )
      QuestionTwo(
        v-else-if="step === 3"
        @completed="nextStep"
        key="two"
      )
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { TweenLite } from 'gsap';
import Opening from '@/components/week8/Opening.vue';
import QuestionOne from '@/components/week8/QuestionOne.vue';
import QuestionTwo from '@/components/week8/QuestionTwo.vue';

export default Component({
  components: {
    Opening,
    QuestionOne,
    QuestionTwo,
  },
})(
  class ParallaxScrolling extends Vue {
    step = 1;
    get bgColor() {
      const { step } = this;
      if (step === 2) {
        return 'step2';
      }
      else if (step === 3) {
        return 'step3';
      }
    }
    nextStep() {
      this.step ++;
    };
  }
);
</script>

<style lang="scss" scoped>
@import '../assets/scss/week8/_utils.scss';

.parallax-scrolling {
  &.step2 {
    background-color: $primary-black;
  }
  &.step3 {
    background-color: $secondary-red;
  }
}
.change-enter-active, .change-leave-active {
  transition: opacity .5s;
}
.change-enter, .change-leave-to {
  opacity: 0;
}
</style>
