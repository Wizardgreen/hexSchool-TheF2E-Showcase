<template lang="pug">
.question-one
  .q-session
    .q-session__wrapper
      .q-session__number Q1
      .q-session__title If one day you get a gift that can change the rule of the world, which ability will you choose?
      .q-session__des Choose the answer appeared in your mind instantly
      ul.q-session__option
        li(v-for="item in option") {{ item }}
  .animation-session
    .animation-session__square
    .animation-session__trangle
    .animation-session__cycle
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
    mounted() {

    };
  }
);
</script>

<style lang="scss" scoped>
@import '../../assets/scss/week8/_utils.scss';

</style>
