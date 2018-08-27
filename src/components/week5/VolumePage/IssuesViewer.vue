<template lang="pug">
  .issues-viewer
    h2.title All Issues
    ul.list
      li.issues(v-for="data in issues", :key="data.id")
        .icon
          i.fas.fa-tag
        a.link(v-if="data.release" @click.prevent='readIssue(data.id)')
          span.issue-nth {{ `#${data.id}` }} - 
          span.issue-name {{ data.name }}
        a.close(v-else)
          span.issue-nth {{ `#${data.id}` }} - 
          span.issue-name {{ data.name }} - Not Available
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { CHANGE_CURRENT_VIEW, CHANGE_CURRENT_ISSUE } from '@/store/mutation-types/week5-types.js'

export default Component({
  props: {
    issues: {
      type: Array,
      required: true,
    },
  },
})(
  class IssuesViewer extends Vue {
    readIssue = id => {
      this.$store.commit(CHANGE_CURRENT_ISSUE, id);
      this.$store.commit(CHANGE_CURRENT_VIEW, 'issue');
    };
  }
)
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/week5/_utils.scss';

.issues-viewer {
  min-height: 150px;
  margin-top: 2rem;
  clip-path: polygon(0 0, 25% 0, 25% 33%, 100% 33%, 100% 99%, 50% 100%, 0 100%, 0% 30%);
  @extend %glassify;
} 
.title {
  @include title($primary);
  display: inline-block;
  padding: .5rem 1rem;
}
.list {
  display: inline-block;
  width: 100%;
  min-height: 100px;
  border-top-left-radius: 0;
  padding: 1rem;
}
.issues {
  display: block;
  &:hover{
    .icon {    
      color: $iconTransform;
      background-color: transparent;
    }
  }
  > .icon {
    @extend %icon;
  }
  > a.link {
    padding: 0 1.5rem;
    @include des($white);
    cursor: pointer;
    transition: color .3s ease-in-out;
    &:hover {
      color: $primary;
    }
  }
  > a.close {
    padding: 0 1.5rem;
    @include des($secondary);
  }
}
</style>
