<template lang="pug">
  el-card.latest-commit
    .latest-commit-title
      p Latest Commit
    el-table(
      :show-header="false"
      :data="list"
      max-height="250"
    )
      el-table-column(prop="name" label="Name" width="100")
      el-table-column(prop="recentlyCommitMsg" label="Message")
      el-table-column(prop="recentlyCommitDate" label="Date")
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Card, Table } from 'element-ui';

export default Component({
  components: {
    'el-card': Card,
    'el-table': Table,
  },
  props: {
    list: {
      type: Array,
      required: true,
      default: [],
    },
  },
})(
  class LatestCommit extends Vue{}
);
</script>

<style lang="scss" scoped>
.latest-commit-title p {
  font-size: 24px;
  font-weight: 700;
}
</style>

