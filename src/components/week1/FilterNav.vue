<template lang="pug">
  .filter
    .week1-container
      .nav
        a.switch(
          :class="{actived: mode === 'All'}"
          @click.prevent="clickTab('All')"
          ) My Tasks
        a.switch(
          :class="{actived: mode === 'Progress'}"
          @click.prevent="clickTab('Progress')"
          ) Progress
        a.switch(
          :class="{actived: mode === 'Completed'}"
          @click.prevent="clickTab('Completed')"
          ) Completed
</template>

<script>
export default {
  name: 'FilterNav',
  props: {
    mode: String,
  },
  methods: {
    clickTab(mode) {
      this.$emit('clickTab', mode);
    }
  },
}
</script>

<style lang="scss" scoped>
.filter {
  background-color: #4A90E2;
  .switch {
    display: inline-block;
    width: 160px;
    height: 75px;
    margin: 0 23.3px;
    border-bottom: 5px solid transparent;
    color : #00408B;
    font-size: 24px;
    text-align: center;
    line-height: 75px;
    transition: border-bottom .3s ease-in-out, color .3s ease-in-out;
    &:hover {
      color: #fff;
    }
    &.actived {
      color: #fff;
      border-bottom: 5px solid #00408B;
    }
  }
}
</style>
