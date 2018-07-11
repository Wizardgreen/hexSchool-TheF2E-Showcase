<template lang="pug">
  .filter-paginnation
    ul.index
      .cell(@click="prevPage")
        i.fas.fa-angle-left
      .cell(
        v-for="number in pages"
        :class="{actived: currentPage == number}"
        @click="chagePage($event, number)"
        ) {{ number }}
      .cell(@click="nextPage")
        i.fas.fa-angle-right
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { CHANGE_PAGE, PREVIOUS_PAGE, NEXT_PAGE } from '@/store/mutation-types/week2-types.js';

export default Component({})(
  class FilterPagination extends Vue {
    get pages() { return this.$store.getters.pages }
    get currentPage() { return this.$store.state.week2.currnentPage }
    
    chagePage(event, newPageNumber) {
      this.$store.commit(CHANGE_PAGE, newPageNumber);
    }
    nextPage() { this.$store.commit(NEXT_PAGE) }
    prevPage() { this.$store.commit(PREVIOUS_PAGE) }
  }
);
</script>


<style lang="scss" scoped>
@import "../../assets/scss/variable.scss";
@import "../../assets/scss/breakpoint.scss";

.filter-paginnation {
  display: flex;
  height: 5rem;
  align-items: center;
  justify-content: center;
  @include break-point($desktop) {
    justify-content: flex-end;
  }
}
.index {
  display: inline-flex;
  width: auto;
  margin-bottom: 1rem;
  position: relative;
  justify-content: center;
}
.cell {
  width: 1.8rem;
  height: 1.8rem;
  border: 1.5px solid #fdfdfd;
  color: $major-black;
  background-color: #fdfdfd;
  text-align: center;
  line-height: 1.8rem;
  transition: all 0.15s ease-in-out;
  &:first-child {
    border-radius: 5px 0 0 5px;
  }
  &:last-child {
    border-radius: 0 5px 5px 0;
  }
  &:hover {
    background-color: $major-black;
    border-color: $major-black;
    color: #fdfdfd;
  }
  &.actived {
    background-color: $major-black;
    border-color: $major-black;
    border-bottom-color: $brand-color;
    color: $brand-color;
  }
}
</style>
