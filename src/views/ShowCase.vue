<template>
  <div class="showCase">
    <Banner 
      v-for="item in collection"
      :info="item"
      :key="item.nth"
      />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import collection from '@/assets/collection.json';

export default {
  name: 'ShowCase',
  data() {
    return {
      "collection": collection,
    }
  },
  components: {
    Banner,
  },
}
</script>

<style lang="scss" scoped>
.showCase {
  display: flex;
  flex-direction: column;
  height: 1620px;
}
</style>
