<template lang="pug">
.page-reader
  swiper.current-view(:options="swiperOption" ref="current")
    swiper-slide(v-for='url in pageUrl', :key="url")
      img(:src="url")
    .swiper-button-prev(slot="button-prev")
    .swiper-button-next(slot="button-next")
  swiper.preview-area(:options="previewOption" ref="preview")
    swiper-slide(v-for='url in pageUrl', :key="url")
      img(:src="url")
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { CHANGE_CURRENT_PAGE} from '@/store/mutation-types/week5-types.js'
import 'swiper/dist/css/swiper.css';

export default Component({
  props: {
    pageUrl: {
      type: Array,
      required: true,
    },
    currentPage: {
      type: String,
      required: true,
    },
  },
  components: {
    swiper,
    swiperSlide,
  },
  watch: {
    currentPage() {
      const current = this.$refs.current.swiper;
      current.slideTo(this.currentPage - 1, 1000, false);
    }
  }
})(
  class PageReader extends Vue {
    swiperOption = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    };
    previewOption = {
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
    }
    get current() { return this.$refs.current.swiper };
    get preview() { return this.$refs.preview.swiper };
    mounted() {
      this.$nextTick(() => {
        const current = this.$refs.current.swiper;
        const preview = this.$refs.preview.swiper;
        current.controller.control = preview;
        preview.controller.control = current;
      });
    };
    // updated() {
    //   const current = this.$refs.current.swiper;
    //   current.slideTo(this.currentPage - 1, 1000, false);
    // };
  }
)
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/week5/_utils.scss';

img {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
}
.current-view {
  margin-top: 1.5rem;
  padding: 1rem;
  height: 930px;
  width: 100%;
  @extend %glassify;
}
.preview-area {
  margin-top: 2rem;
  padding: 1rem;
  height: 150px;
  @extend %glassify;
  img {
    margin: 0;
  }
  .swiper-slide {
    width: 10%;
    height: 100%;
    opacity: 0.4;
  }
  .swiper-slide-active {
    opacity: 1;
  }
}
</style>
