<template>
  <div id="app">
    <Navigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import '@/assets/js/fontawesome-all.min.js';

export default {
  components: {
    Navigation,
  },
}
</script>


<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  line-height: 1;
  text-decoration: none;
  list-style: none;
}
.icon {
  display: inline-block;
}
</style>
