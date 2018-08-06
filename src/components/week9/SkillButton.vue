<template lang="pug">
  .skill-button(:class="[status]")
    img(:src="setImgUrl")
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

export default Component({
  props: {
    status: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
})(
  class SkillButton extends Vue {
    get setImgUrl() {
      return require(`../../assets/img/week9/img_${this.icon}.png`);
    };
  }
);
</script>

<style lang="scss" scoped>
.skill-button {
  width: 104px;
  height: 104px;
  margin: 1rem;
  position: relative;
  background-color: rgba(0, 147, 255, 0.35);
  border-radius: 39px;
  box-shadow: 0 3px 6px rgba(0, 147, 255, 0.44);
  cursor: pointer;
  &.locked {
    border: 12px solid rgba(92, 92, 92, 0.62);
  }
  &.empty {
    border: 12px solid rgba(255, 255, 255, 0.62);
  }
  &.selected {
    border: 12px solid rgba(87, 145, 255, 0.62);
  }
}
img {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%) scale(.8);
  transition: transform .3s ease-in-out;
  &:hover {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
