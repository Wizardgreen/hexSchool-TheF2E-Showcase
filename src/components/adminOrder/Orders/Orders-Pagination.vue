<template lang="pug">
  .orders-pagination
    el-pagination(
      layout="prev, pager, next"
      :total="100"
      @current-change="changeOrdersPage"
      @prev-click="changeOrdersPage"
      @next-click="changeOrdersPage"
      background
    )
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Pagination } from 'element-ui';
import { CHANGE_ORDERS_PAGE } from '@/store/mutation-types/week3-types.js';

export default Component({
  components: { 'el-pagination': Pagination }
})(
  class OrdersPagination extends Vue {
    changeOrdersPage(newPage) { this.$store.commit(CHANGE_ORDERS_PAGE, newPage) };
  }
)
</script>
