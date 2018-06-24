<template lang="pug">
  .Overview
    el-row
      el-col(:xs="24")
        p.title(style="font-size: 2rem") Stars 
          i.el-icon-star-on(style="color: #FECD61")
    el-row(:gutter="20")
      el-col(:xs="12", :md="8")
        PrimaryMark(title="React", :value="react.star", :color="color.blue")
      el-col(:xs="12", :md="8")
        PrimaryMark(title="Angular", :value="angular.star", :color="color.pink")
      el-col(:xs="24", :md="8")
        PrimaryMark(title="Vue", :value="vue.star", :color="color.green")
    el-row
      el-col(:span="24")
        Activity
    el-row(:gutter="20")
      el-col(:xs="24", :md="12")
        SourceList
      el-col(:xs="24", :md="12")
        LatestCommit(:list="recentlyCommit")
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Row, Col } from 'element-ui';
import axios from 'axios';
import Activity from './Overview-Activity.vue';
import PrimaryMark from './Overview-PrimaryMark.vue';
import SourceList from './Overview-SourceList.vue';
import LatestCommit from './Overview-LatestCommit.vue';

export default Component({
  components: {
    Activity,
    PrimaryMark,
    SourceList,
    LatestCommit,
    'el-row': Row,
    'el-col': Col,
  }
})(
  class Overview extends Vue{
    color = {
      pink: '#FD6685',
      blue: '#3EA3E8',
      yellow: '#FECD61',
      green: '#51C0BF',
    };
    vue = {
      star: '',
      recentlyCommitMsg: '',
      recentlyCommitDate: '',
    };
    react = {
      star: '',
      recentlyCommitMsg: '',
      recentlyCommitDate: '',
    };
    angular = {
      star: '',
      recentlyCommitMsg: '',
      recentlyCommitDate: '',
    };
    get recentlyCommit() {
      const vm = this;
      return [
        { name: 'Vue', ...vm.vue },
        { name: 'React', ...vm.react },
        { name: 'Angular', ...vm.angular },
      ];
    }
    mounted() {
      const vm = this;
      axios
        .get('https://api.github.com/repos/vuejs/vue')
        .then(response => vm.vue.star = response.data.stargazers_count);
      axios
        .get('https://api.github.com/repos/vuejs/vue/commits')
        .then(response => {
          vm.vue.recentlyCommitMsg = response.data[0].commit.message;
          vm.vue.recentlyCommitDate = response.data[0].commit.committer.date;
        });
      axios
        .get('https://api.github.com/repos/facebook/react')
        .then(response => vm.react.star = response.data.stargazers_count);
      axios
        .get('https://api.github.com/repos/facebook/react/commits')
        .then(response => {
          vm.react.recentlyCommitMsg = response.data[0].commit.message;
          vm.react.recentlyCommitDate = response.data[0].commit.committer.date;
        });
      axios
        .get('https://api.github.com/repos/angular/angular')
        .then(response => {
          vm.angular.star = response.data.stargazers_count;
        });
      axios
        .get('https://api.github.com/repos/angular/angular/commits')
        .then(response => {
          vm.angular.recentlyCommitMsg = response.data[0].commit.message;
          vm.angular.recentlyCommitDate = response.data[0].commit.committer.date;
        });
    }
  }
)
</script>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  @media (max-width: 990px) {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
