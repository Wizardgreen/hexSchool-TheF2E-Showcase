<template lang="pug">
  .comic-viewer
    .container
      transition(name="el-fade-in-linear")
        VolumePage(v-if="currentView == 'overview'")
        ViewPage(v-else-if="currentView == 'issue'")
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import VolumePage from '@/components/comicViewer/VolumePage/';
import ViewPage from '@/components/comicViewer/ViewPage/';
import { FETCH_COMIC_DATA } from '@/store/types/week5-type.js';

export default Component({
  components: {
    VolumePage,
    ViewPage,
  }
})(
  class ComicViewer extends Vue {
    get currentView() { return this.$store.state.week5.currentView }
    created() {
      const comicData = {
        title: 'Justice League #7',
        written: 'Geoff Johns',
        art: ['Phil Jimenez', 'Jim Lee', 'Jason Fabok', 'Scott Williams', 'Scott Kolins', 'Kevin Maguire', 'Jerry Ordway'],
        series: 'JUSTICE LEAGUE 2011',
        summary: 'The Justice League originally united to stop the forces of Darkseid from destroying Earth! Now the ruler of Apokolips is back in this new DC Essential collection, but this time he’s set his sights on the world-shattering Anti-Monitor. Will the combined might of the Justice League be enough to protect Earth from becoming collateral damage as gods fight?',
        cover: 'https://i.imgur.com/jaJLib4.jpg',
        issues: [
          {
            id: '1',
            name: 'Darksied War Part 1',
            pageUrl: [
              'https://i.imgur.com/jaJLib4.jpg',
              'https://i.imgur.com/mXcSbXK.jpg',
              'https://i.imgur.com/p6SEgL5.jpg',
              'https://i.imgur.com/5zS8TdW.jpg',
              'https://i.imgur.com/OOGyxuq.jpg',
            ],
            release: true,
          },
          {
            id: '2',
            name: 'The Power of Gods',
            pageUrl: [],
            release: false,
          },
          {
            id: '3',
            name: 'Darksied War Part 2',
            pageUrl: [],
            release: false,
          },
        ],
      };
      this.$store.commit(FETCH_COMIC_DATA, comicData);
    }
  }
)
</script>

<style lang="scss" scoped>
@import '../assets/scss/week5/_utils.scss';

.container {
  display: flex;
  flex-direction: column;
  width: 720px;
  margin: 0 auto;
}
.comic-viewer {
  position: relative;
  z-index: 10;  // 在最後放避免覆蓋毛玻璃
  min-height: calc(100vh - 41px);
  width: 100vw;
  padding-top: 10vh;
  padding-bottom: 2rem;
  @extend %glassifyBackgroundSetting;
  
}
</style>
