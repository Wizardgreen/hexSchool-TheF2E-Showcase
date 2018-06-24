<template lang="pug">
  el-menu.admin-nav(
    :default-active="currentView"
    mode="horizontal"
    )
    el-menu-item(index="Overview" @click="changeView('Overview')") Overview
    el-menu-item(index="Orders" @click="changeView('Orders')") Orders
    el-menu-item(index="Product" @click="changeView('BlackList')") BlackList
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Menu, MenuItem, MenuItemGroup } from 'element-ui';
import { CHANGE_CURRENT_VIEW } from '@/mutation/week3AdminOrder.js';

export default Component({
  components: {
    'el-menu': Menu,
    'el-menu-item': MenuItem,
  }
})(
  class AdminNav extends Vue {
    get currentView() { return this.$store.state.week3.currentView }
    changeView(target) { this.$store.commit(CHANGE_CURRENT_VIEW, target) }
  }
)
</script>

<style lang="scss" scoped>
@import '../../assets/scss/breakpoint.scss';

ul.admin-nav {
  @include break-point($desktop) {
    padding: 0 4rem;
  }
}
</style>

