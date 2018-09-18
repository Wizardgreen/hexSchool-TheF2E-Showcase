<template lang="pug">
  el-card.primary-mark(:style="{backgroundColor: color}")
    .card-title
      p {{ title }}
    .card-content
      p {{ value }}
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Card } from 'element-ui';

export default Component({
  components: {
    'el-card': Card,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      tpye: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  }
})(
  class PrimaryMark extends Vue{}
)
</script>

<style lang="scss" scoped>
.card-title {
  text-align: center;
  p {
    font-size: 1.5rem;
    color: white;
  }
}
.card-content > p {
  margin-top: 1rem;
  color: white;
  font-size: 36px;
  font-weight: 400;
  text-align: center;
}
</style>
