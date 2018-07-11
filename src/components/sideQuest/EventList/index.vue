<template lang="pug">
  el-row.event-list(:gutter="12")
    el-col.warp(:span="24")
      h2.location-title {{ currentLocation }}
        p.count 共有 {{ eventList.length }} 筆記錄
      p.contact 防災災情諮詢電話 : 87863119 / 分機 : 8900-8907
      EventCard(v-for="(event, index) in eventList"
        :key="index"
        :isComplete="event.CaseComplete"
        :time="event.CaseTime"
        :location="event.CaseLocationDistrict"
        :type="event.PName"
        :description="event.CaseDescription"
        :locationDes="event.CaseLocationDescription"
      )
    .btn-close(@click="closePanel")
      i.fas.fa-times
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import EventCard from './EventCard.vue';
import { Row, Col } from 'element-ui';
import { CLOSE_PANEL } from '@/store/mutation-types/sideQuest-types.js';

export default Component({
  components: {
    EventCard,
    'el-row': Row,
    'el-col': Col,
  }
})(
  class EventList extends Vue {
    closePanel() { this.$store.commit(`sideQuest/${CLOSE_PANEL}`) };
    get formatTime() {
      console.log(new Date(this.time));
    }
    get eventList() {
      return this.$store.getters['sideQuest/FilteredByLocation'];;
    };
    get currentLocation() {
      return this.$store.state.sideQuest.currentLocation;
    };
  }
)
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/sideQuest/_utils.scss';
@import '../../../assets/scss/common/_break-point.scss';

.event-list {
  width: 100%;
  height: 100vh;
  margin: 0 !important;
  padding: .3rem;
  top: 80px;
  right: 0;
  position: absolute;
  background: #F4F4F4;
  overflow: scroll;
  @include break-point($landscape) {
    width: 400px;
  }
}
.warp > * + * {
  margin-top: .5rem;
}
.location-title, .count {
  display: inline;
  @include title;
}
.count {
  margin-left: 1rem;
}
.contact {
  @include text($text-event);
}
.btn-close {
  position: absolute;
  top: .3rem;
  right: 1rem;
  cursor: pointer;
}
</style>

