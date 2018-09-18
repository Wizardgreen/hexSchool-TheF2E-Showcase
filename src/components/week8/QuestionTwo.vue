<template lang="pug">
  .question-two
    .q-session
    .animation-session(ref="animation-session")
      .animation-session__square(ref="square" v-show="isGeometryShow")
      .animation-session__trangle(ref="trangle" v-show="isGeometryShow")
      .animation-session__circle(ref="circle" v-show="isGeometryShow")
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

export default Component({
})(
  class QuestionTwo extends Vue {
    isGeometryShow = true;
  }
)
</script>

<style lang="scss" scoped>
@import '../../assets/scss/week8/_utils.scss';

.question-two {
  width: 100vw;
  height: 100vh;
  background-color: $secondary-red;
  position: relative;
  overflow: hidden;
}

.q-session {
  position: absolute;
  right: 0;
  background-color: $secondary-red;
  opacity: 0;
}

.animation-session{
  left: 0;
  right: 60%;
  background-color: $secondary-yellow;
}
</style>