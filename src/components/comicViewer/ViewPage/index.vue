<template lang="pug">
  .view-page
    IssueSelector(
      :title='comicData.title'
      :issues='comicData.issues'
      :currentIssue='currentIssue'
      :currentPage='currentPage'
    )
    PageReader(
      :pageUrl='pageUrl'
      :currentPage='currentPage'
    )
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import IssueSelector from './IssueSelector.vue';
import PageReader from './PageReader.vue';

export default Component({
  components: {
    IssueSelector,
    PageReader,
  }
})(
  class ViewPage extends Vue {
    get comicData() { return this.$store.state.week5.comicData };
    get currentIssue() { return this.$store.state.week5.currentIssue };
    get currentPage() { return this.$store.state.week5.currentPage };
    get pageUrl() {
      return this.comicData.issues[this.currentIssue - 1].pageUrl
    }
  }
)
</script>
