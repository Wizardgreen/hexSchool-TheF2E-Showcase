<template lang="pug">
  .issue-selector
    .title(@click="returnToOverview") {{ title }}
    .icon
      i.fas.fa-angle-right
    select.chapter-selector(
      @change='changeIssue($event)'
      :value='currentIssue'
      )
      template(v-for='item in issueList')
        option(
          v-if='item.release'
          :value="item.id"
          :key="item.id"
          ) Chapter {{item.id}} - {{item.name}}
        option(
          v-else
          disabled
          :value="item.id"
          :key="item.id"
          ) Chapter {{item.id}} - {{item.name}}
    select.page-selector(
      @change='changePage($event)'
      :value='currentPage'
      )
      option(v-for='nth in pages', :value='nth', :key='nth') Page {{nth}}
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import {
  CHANGE_CURRENT_ISSUE,
  CHANGE_CURRENT_PAGE,
  CHANGE_CURRENT_VIEW,
} from '@/store/mutation-types/week5-types.js'

export default Component({
  props: {
    title: {
      type: String,
      required: true,
    },
    issues: {
      type: Array,
      required: true,
    },
    currentIssue: {
      type: String,
      required: true,
    },
    currentPage: {
      type: String,
      required: true,
    },
  },
})(
  class IssueSelector extends Vue {
    changeIssue(event) {
      const issueId = event.target.value;
      this.$store.commit(CHANGE_CURRENT_ISSUE, issueId);
    }
    changePage(event) {
      const pageNth = event.target.value;
      this.$store.commit(CHANGE_CURRENT_PAGE, pageNth);
    }
    returnToOverview() {
      this.$store.commit(CHANGE_CURRENT_VIEW, 'overview');
    }
    get pages() { return this.issues[this.currentIssue - 1].pageUrl.length }
    get issueList() {
      return this.issues.map(issue => ({
        id: issue.id,
        name: issue.name,
        release: issue.release,
      }))
    }
  }
)
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/week5/_utils.scss';

.issue-selector {
  display: flex;
  min-height: 60px;
  padding: 0 1rem;
  align-items: center;
  justify-content: center;
  @extend %glassify;
}
.title {
  @include subTitle($primary);
  font-size: 1.5rem;
  cursor: pointer;
}
.icon {
  margin: 0 .5rem;
  font-size: 1.5rem;
  color: $white;
}
select {
  @extend %glassify;
  width: 6rem;
  height: 2rem;
  background-color: rgba(0, 0, 0, .45);
  border: none;
  margin-left: 1rem;
  color: #fff;
  &.chapter-selector {
    width: 14rem;
  }
}
</style>