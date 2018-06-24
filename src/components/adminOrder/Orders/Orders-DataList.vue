<template lang="pug">
  el-table.orders-datalist(
    :data="list"
    :row-style="randomColor")
    el-table-column(prop="name" label="Name")
    el-table-column(prop="account" label="Account")
    el-table-column(prop="amount" label="Amount")
    el-table-column(prop="date" label="Date")
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Table } from 'element-ui';

export default Component({
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  components: {
    'el-table': Table,
  },
})(
  class OrdersDataList extends Vue {
    randomColor({row, index}) {
      const $ = row.amount
      if ($ > 0 && $ < 200) {return {
        'background-color': 'rgba(254,	205, 97)',
        'color': '#fff',
        }}
      if ($ > 200 && $ < 300) {return {
        'background-color': 'rgba(251, 103, 134)',
        'color': '#fff',
        }}
      if ($ > 300 && $ < 400) {return {
        'background-color': 'rgba(68, 164, 230)',
        'color': '#fff',
        }}
      if ( $ > 400 && $ < 500 ) {return {
        'background-color': 'rgba(81, 192, 191)',
        'color': '#fff',
        }}
    }
  }
)
</script>
