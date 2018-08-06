<template lang="pug">
  .skill-list
    SkillButton(
      v-for="skill in skillData"
      :icon="skill.id"
      :status="skill.status"
      :key="skill.id"
      :x="skill.x"
      :y="skill.y"
      :currentPoint="skill.currentPoint"
      :maxPoint="skill.maxPoint"
    )
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import SkillButton from './SkillButton.vue';

export default Component({
  components: {
    SkillButton,
  },
  props: {
    skillData: {
      type: Array,
      required: true,
    },
  },
})(
  class SkillList extends Vue {
    
  }
);
</script>

<style lang="scss" scoped>
.skill-list {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
