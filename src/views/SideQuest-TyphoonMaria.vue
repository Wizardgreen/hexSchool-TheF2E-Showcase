<template lang="pug">
  .typhoon-maria
    .title
      h1 台北市動態災害資訊
    GoogleMap
    transition(name="el-zoom-in-top")
      EventList(v-show="showPanel")
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import axios from 'axios';
import GoogleMap from "@/components/sideQuest/GoogleMap.vue";
import EventList from "@/components/sideQuest/EventList/";
import { FETCH_DISASTER_LIST } from '@/store/mutation-types/sideQuest-types.js';

export default Component({
  components: {
    GoogleMap,
    EventList,
  }
})(
  class TyphoonMaria extends Vue {
    get showPanel() {
      return this.$store.state.sideQuest.showPanel;
    }
    mounted() {
      const vm = this;
      axios
        // .get('https://tpeoc.blob.core.windows.net/blobfs/GetDisasterSummary.json')
        .get('https://next.json-generator.com/api/json/get/Ek86hdRMr')
        .then(res => {
          if (res.status == 200) {
            this.$store.commit(`sideQuest/${FETCH_DISASTER_LIST}`, res.data);
          }
        })
        .catch(error =>
          console.log(error)
        );
    }
  }
)
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');

.typhoon-watcher {
  position: relative;
  height: calc(100vh - 79.8px);
}
.title {
  padding: .5rem 0;
  color: #666;
  background-color: #fff;
  text-align: center;
  font-weight: normal !important;
  font-family: 'Roboto';
  letter-spacing: 5px;
}
</style>
