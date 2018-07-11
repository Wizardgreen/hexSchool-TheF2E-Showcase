<template lang="pug">
  el-table.blackList(:data="blackList" stripe)
    el-table-column(prop="id" label="ID" width="50")
    el-table-column(label="Avatar" width="150")
      template(slot-scope="scope")
        img(:src="scope.row.avatar")
    el-table-column(prop="name" label="Name" width="150")
    el-table-column(prop="company.name" label="Company" width="250")
    el-table-column(prop="email" label="Email")
    el-table-column(
      label="Function"
      fixed="right"
      width="100"
      )
      template(slot-scope="scope")
        el-button(@click="remove(scope.row.id)" type="text") Delete
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Table, Button } from 'element-ui';
import { REMOVE_BLACK_ONE } from '@/store/mutation-types/week3-types.js';

export default Component({
  components: {
    'el-table': Table,
    'el-button': Button,
  }
})(
  class BlackList extends Vue {
    remove(id) { this.$store.commit(REMOVE_BLACK_ONE, id) } 
    get blackList() { return this.$store.state.week3.blackList }
  }
)
</script>
