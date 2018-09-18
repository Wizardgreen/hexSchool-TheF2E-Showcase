<template lang="pug">
  el-card.source-list
    .source-list-title
      p Website For Nothing
    el-table(
      :data="website"
      :show-header="false"
      stripe)
      el-table-column(prop="name")
      el-table-column(prop="url")
      el-table-column(prop="phone")
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Card, Table } from 'element-ui';
import { fakeWebsite } from '@/assets/js/fakeData.js';

export default Component({
  components: {
    'el-card': Card,
    'el-table': Table,
  }
})(
  class SourceList extends Vue{
    website = fakeWebsite();
  }
);
</script>

<style lang="scss" scoped>
.source-list-title p {
  font-size: 24px;
  font-weight: 700;
}
</style>
