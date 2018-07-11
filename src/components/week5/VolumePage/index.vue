<template lang="pug">
  .volume-page
    .row
      VolumeCover(:imgSrc="comicData.cover")
      InfoSection(
        :title="comicData.title"
        :written="comicData.written"
        :art="comicData.art"
        :series="comicData.series"
        :summary="comicData.summary"
      )
    IssuesViewer(:issues="comicData.issues")
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import VolumeCover from './VolumeCover.vue'
import InfoSection from './InfoSection.vue';
import IssuesViewer from './IssuesViewer.vue';

export default Component({
  components: {
    VolumeCover,
    InfoSection,
    IssuesViewer,
  }
})(
  class VolumePage extends Vue {
    get comicData() { return this.$store.state.week5.comicData };
  }
)
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/week5/_utils.scss';

.row {
  display: flex;
  > * {
    flex: 100%;
    @include break-point($landscape) {
      flex: 1;
    }
  }
}
</style>
