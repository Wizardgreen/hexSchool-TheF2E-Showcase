<template lang="pug">
  .SkillTree
    SkillList(:skillData="skillData")
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import SkillList from '@/components/week9/SkillList.vue';

export default Component({
  components: {
    SkillList,
  },
})(
  class SkillTree extends Vue {
    skillData = [
      {
        id: 'axe',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'blade',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'book',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'chest',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'color',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'emblem',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'footer',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'hammer',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'hat',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'hexcat',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'horn',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'illustration',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'inspiration',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'meat',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'monocat',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'padora',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'pictures',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'planet',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'quill',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'red-chest',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'red-yellow',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'rocket',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'sense',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
      {
        id: 'shield',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,  
      },
      {
        id: 'sword',
        status: 'empty',
        x: '',
        y: '',
        currentPoint: 0,
        maxPoint: 5,
      },
    ];
  }
);
</script>
