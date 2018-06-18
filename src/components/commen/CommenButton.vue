<template lang="pug">
  Button.commen-button(
    @click="heandleClick"
    :class="[outward, shape, size, {outline, loading}]"
    type="button"
    )
    slot(name="text" v-if="!loading")
    .loading(v-else)
      BallScaleRippleMultipleLoader(color="#222222" size="2rem")
</template>

<script>
import Vue from 'vue';
import Component from "vue-class-component";
import 'vue-loaders/dist/vue-loaders.css';
import { BallScaleRippleMultipleLoader } from 'vue-loaders';

export default Component({
  props: {
    outward: {
      type: String,
      default: () => 'major',
    },
    shape: {
      type: String,
      default: () => 'default',
    },
    size: {
      type: String,
      default: () => 'md',
    },
    outline: {
      type: Boolean,
      default: () => false,
    },
    loading: {
      type: Boolean,
      default: () => false,
    }
  },
  components: { BallScaleRippleMultipleLoader },
})(
  class CommenButton extends Vue {
    heandleClick() {
      this.$emit('press');
    }
  }
)
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variable.scss';
.commen-button{
  font-size: 1.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all .1s ease-in-out;
}
// Outward
.major {
  color: $brand-color;
  background-color: $major-black;
  &:active {
    background-color: #fdfdfd;
    color: $major-black;
  }
}
.light {
  color: $major-black;
  background-color: #fdfdfd;
  &:active {
    background-color: $major-black;
    color: $brand-color;
  }
}
// shape
.default {
  border-radius: 5px;
  &.md {
    min-width: 80px;
    height: 2.5rem;
    padding: 0 1.5rem;
  }
}
.column {
  border-radius: 0 5px 5px 0;
  &.s {
    min-height: 60px;
    width: 1.675rem;
    padding: 1.175rem 0;
  }
  &.md {
    min-height: 80px;
    width: 2.5rem;
    padding: 1.5rem 0;
  }
}
.cycle {
  border-radius: 50%;
  &.md {
    width: 2.5rem;
    height: 2.5rem;
  }
}
// outline
.outline {}

</style>
