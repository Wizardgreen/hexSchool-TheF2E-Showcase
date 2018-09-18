<template lang="pug">
.form-container
  .stage-title
    h2 Create&nbsp;&nbsp;Account
  .wrap
    component(
      v-for="(field, index) in steps.one"
      :is="field.fieldType"
      :key="index"
      :index="index"
      @complete="increseCounter"
      @failed="decreseCounter"
      v-bind="field"
    )
    .progress-container
      transition(name="el-zoom-in-center")
        .complete-button(v-if="progressBarStatus == 'success'")
          button.inner-cycle
            span.N N
            span.E E
            span.X X
            span.T T
        el-progress(
          v-else
          type="circle"
          :percentage="progress"
          :status="progressBarStatus"
          :width="126"
        )
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Progress } from 'element-ui';
import TextInput from './TextInput.vue';

export default Component({
  components: {
    'el-progress': Progress,
    TextInput,
  },
})(
  class FormContainer extends Vue {
    steps = {
      one: [
        {
          fieldType: 'TextInput',
          label: 'account',
          type: 'email',
          placeholder: 'greene@exapmle.com.tw',
        },
        {
          fieldType: 'TextInput',
          label: 'password',
          type: 'password',
        },
        {
          fieldType: 'TextInput',
          label: 'comfirm password',
          type: 'password',
        },
      ],
    };
    counter = [];
    currentStep = 'one';

    // 計算進度條
    get progress() {
      const inputNum = this.steps[this.currentStep].length;
      let success = 0;
      let notRequire = 0;

      // 計算通過的數量
      this.counter.forEach(item => {
        if (item) { success += 1; }
      });

      // 計算必填的數量
      this.steps[this.currentStep].forEach(item => {
        if (item.isOptional) { notRequire += 1; }
      });

      const total = inputNum - notRequire;
      return Math.floor((100 * (success / total)));
    };
    get progressBarStatus() {
      const vm = this;
      if (vm.progress == 100) {
        return 'success';
      }
      else if (vm.counter.includes(false)) {
        return 'exception';
      }
      else { return ''; }
    };
    increseCounter(index) { this.$set(this.counter, index, true); };
    decreseCounter(index) { this.$set(this.counter, index, false); };
  }
)
</script>

<style lang="scss">
@import '../../assets/scss/week6/_utils.scss';

.form-container {
  display: flex;
  position: relative;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  width: 90%;
  height: 600px;
  border-radius: $radius;
  flex-direction: column;
  background: #fdfdfd;
  @include break-point($table) {
    width: 520px;
  }
}
.stage-title {
  height: 60px;
  border-top-left-radius: $radius;
  border-top-right-radius: $radius;
  background-color: $secondary-blue;
  > h2 {
    @include title(#fff);
    text-align: center;
    line-height: 60px;
  }
}
.wrap {
  display: inline-flex;
  width: 85%;
  height: 100%;
  flex-direction: column;
  flex: 1;
  align-self: center;
}
.progress-container {
  display: flex;
  align-items: center;
  flex: 1;
  margin: 0 auto;
}
.el-progress__text {
  font-size: 1.5rem !important;
}
.complete-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 126px;
  width: 126px;
  border-radius: 50%;
  background-color: $primary-black;
}
.inner-cycle {
  height: 114px;
  width: 114px;
  border: none;
  border-radius: 50%;
  background-color: $primary-black;
  outline: none;
  > * + * {
    margin-left: .2rem;
  }
  > span {
    font-size: 2rem;
  }
  > .N {
    color: $secondary-red;
  }
  > .E {
    color: $secondary-green;
  }
  > .X {
    color: $secondary-yellow;
  }
  > .T {
    color: $secondary-blue;
  }
}
</style>

