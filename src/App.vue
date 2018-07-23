<template lang="pug">
  #app
    TheHeading
    router-view
</template>

<script>
import TheHeading from '@/components/TheHeading.vue';

export default {
  components: {
    TheHeading,
  },
};
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
