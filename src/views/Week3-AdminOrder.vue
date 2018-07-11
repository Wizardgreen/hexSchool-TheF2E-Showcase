<template lang="pug">
  el-container.admin-order
    el-header
      AdminNav
    el-main
      transition(name="el-fade-in-linear")
        component(:is="currentView")
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Container, Header, Main } from 'element-ui';
import AdminNav from '@/components/adminOrder/AdminNav.vue';
import Overview from '@/components/adminOrder/Overview/index.vue';
import Orders from '@/components/adminOrder/Orders/index.vue';
import BlackList from '@/components/adminOrder/BlackList/index.vue';
import { FETCH_TRANSACTION_LIST, FETCH_BLACK_LIST } from '@/store/mutation-types/week3-types.js';
import { fakeTransaction, fakeBlackList } from '@/assets/js/fakeData.js';

export default Component({
  components: {
    AdminNav,
    Overview,
    Orders,
    BlackList,
    'el-container': Container,
    'el-header': Header,
    'el-main': Main,
  },
})(
  class AdminOrder extends Vue {
    get currentView() { return this.$store.state.week3.currentView };
    mounted() {
      // 接收交易清單並改變日期格式
      const originList = fakeTransaction();
      const formatList = originList.map(item => {
        const M = item.date.getMonth() + 1;
        const d = item.date.getDate();
        const h = item.date.getHours();
        const m = item.date.getMinutes();
        const s = item.date.getSeconds();
        item.date = `${M}/${d} ${h}:${m}:${s}`;
        return item;
      });
      this.$store.commit(FETCH_TRANSACTION_LIST, formatList);

      // 接收黑名單
      const blackList = fakeBlackList();
      this.$store.commit(FETCH_BLACK_LIST, blackList);
    };
  }
);
</script>

<style lang="scss" scoped>
@import '../assets/scss/breakpoint.scss';

.el-container {
  background-color: #F2F2F2;
}
.el-header {
  padding: 0;
}
.el-main {
  @include break-point($desktop) {
    margin: auto 4rem;
  }
}
</style>
