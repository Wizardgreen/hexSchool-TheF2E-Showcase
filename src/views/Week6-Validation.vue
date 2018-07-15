<template lang="pug">
  .validation-base
    FormContainer
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import FormContainer from '@/components/week6/FormContainer.vue';
import { Steps } from 'element-ui';

export default Component({
  components: {
    FormContainer,
    'el-steps': Steps,
  }
})(
  class Validation extends Vue {}
)
</script>

<style lang="scss" scoped>
@import '../assets/scss/week6/_utils.scss';

.validation-base {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 41.38px);
  background-color: #333;
}
// .form-steps {
//   width: 80%;
//   margin: 3rem 0 2rem 0;
//   @include break-point($table) {
//   width: 400px;
//   }
// }
</style>
