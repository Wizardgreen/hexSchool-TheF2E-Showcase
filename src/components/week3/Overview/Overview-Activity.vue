<template lang="pug">
  el-card.activity
    el-row
      el-col(:span="24")
        p.activity-title Activity For Nothing
      el-col(:span="24",style="{maxHeight: 400px}")
        chart(:data="chartData", :height="400")
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Row, Col, Card } from 'element-ui';
import Chart from './Overview-Activity-Chart.vue';

export default Component({
  components: {
    'el-row': Row,
    'el-col': Col,
    'el-card': Card,
    Chart,
  }
})(
  class Activity extends Vue {
    get chartData() { return this.$store.state.week3.chartData };
  }
)
</script>

<style lang="scss" scoped>
.activity-title {
  font-size: 24px;
  font-weight: 700;
}
</style>
