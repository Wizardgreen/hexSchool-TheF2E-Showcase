<template lang="pug">
  .Orders
    el-row.orders-header
      el-col(:span="24")
        el-dropdown
          span.icon.el-icon-edit
          el-dropdown-menu(slot="dropdown")
            el-dropdown-item(v-for="(option, index) in list", :key="index + 1") {{ option }}
    el-row.orders-content
      el-col(:span="24")
        OrdersDataList(:list="listScopedByPage")
    el-row.orders-footer(type="flex" justify="end")
        OrdersPagination
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Row, Col, Dropdown, DropdownMenu, DropdownItem } from 'element-ui';
import OrdersDataList from './Orders-DataList.vue';
import OrdersPagination from './Orders-Pagination.vue';

export default Component ({
  components: {
    OrdersDataList,
    OrdersPagination,
    'el-row': Row,
    'el-col': Col,
    'el-dropdown': Dropdown,
    'el-dropdown-menu': DropdownMenu,
    'el-dropdown-item': DropdownItem,
  }
})(
  class Orders extends Vue {
    list = [
      'Select All',
      'Unselect All',
      'Paid',
      'Unpaid',
      'Shopping',
      'Done',
    ];
    get listScopedByPage() { return this.$store.getters.listScopedByPage };
  }
);
</script>


<style lang="scss" scoped>
.icon {
  font-size: 1.5rem;
}
</style>
