<template lang="pug">
  .filter
    .title(:class="{searching: isSearching}")
      h2.workTitle sDreaming
    FilterConditionSelector
    .content(:class="{searching: isSearching}")
      FilterCard(
        v-for="(item, index) in filteredData"
        v-if="index<=10"
        :info="item"
        :key="item.UID"
        )
      FilterPagination
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import axios from 'axios';
import { FETCH_EVENT_DATA } from '@/store/mutation-types/week2-types.js';
import FilterConditionSelector from '@/components/filter/FilterConditionSelector.vue';
import FilterCard from '@/components/filter/FilterCard.vue';
import FilterPagination from '@/components/filter/FilterPagination.vue';

export default Component({
  components: {
    FilterConditionSelector,
    FilterCard,
    FilterPagination,
  },
})(
  class DataFilter extends Vue {
    get filteredData() { return this.$store.getters.filteredAgainByPages }
    get isSearching() { return this.$store.state.week2.isSearching }
    mounted() {
      const vm = this;
      axios
        .get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=5')
        .then(response => vm.$store.commit(FETCH_EVENT_DATA, response.data));
    };
  }
);
</script>

<style lang="scss" scoped>
@import '../assets/scss/variable.scss';

.filter {
  height: 100%;
  background-image: url('https://i.imgur.com/6grdyVr.jpg');
  background-size: cover;
  background-position: center top;
}
.title, .content {
  transition: filter .3s ease-in-out;
  &.searching {
    filter: blur(3px);
  }
}
.content {
  width: 85%;
  margin: 0 auto;
}
.title {
  background-color: $major-black;
  .workTitle {
    height: 70px;
    color: $brand-color;
    font-weight: 400;
    letter-spacing: 1px;
    text-align: center;
    line-height: 70px;
  }
}
</style>
