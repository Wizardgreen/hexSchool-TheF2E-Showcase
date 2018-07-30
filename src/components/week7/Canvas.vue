<template lang="pug">
  .canvas-wrapper
    canvas(ref="main")
    slot
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

export default Component({})(
  class Canvas extends Vue {
    provider = {
      context: null,
    };
    provide () {
      return {
        provider: this.provider
      }
    };
  }
)
</script>

<style lang="scss" scoped>
  canvas {
    height: calc(100vh - 41.38px);
    width: 100%;
    border: 5px solid #222;
  }
</style>
