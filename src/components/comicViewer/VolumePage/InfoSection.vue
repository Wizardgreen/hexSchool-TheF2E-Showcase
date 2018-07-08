<template lang="pug">
  section.info-section
    h2.comic-title {{ title }}
    .detail
      .written
        span.detail-title Written
        .detail-des {{ written }}
      .art
        span.detail-title Art
        .detail-des {{ artists }}
      .series
        span.detail-title Series
        .detail-des {{ series }}
    .summary
      p.summary-title Summary
      p.summary-des {{ summary }}
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

export default Component({
  props: {
    title: {
      type: String,
      required: true,
    },
    written: {
      type: String,
      required: true,
    },
    art: {
      type: Array,
      required: true,
    },
    series: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
  }
})(
  class InfoSection extends Vue {
    get artists() {
      let stringifyList;
      this.art.forEach((name, index) => {
        if (index == 0) { stringifyList = name }
        else { stringifyList += `, ${name}`}
      });
      return stringifyList;
    };
  }
);

</script>

<style lang="scss" scoped>
@import '../../../assets/scss/week5/_utils.scss';

.info-section {
  height: 450px;
  padding-left: 1rem;
  overflow: scroll;
}
.comic-title {
  padding: .5rem;
  text-align: center;
  @include title($white);
  @extend %glassify;
}
.art > .detail-des {
  padding: .5rem 0;
}
.detail > * {
  display: flex;
  min-height: 2rem;
  margin-top: 1rem;
  padding: 0 1rem;
  align-items: center;
  @extend %glassify;
  &:last-child {
    margin-bottom: 1rem;
  }
  > .detail-title {
    display: inline-block;
    height: 100%;
    width: 5rem;
    @include subTitle($primary);
  }
  > .detail-des  {
    flex: 1;
    @include des($white);
  }
}
.summary {
  padding: 1rem;
  @extend %glassify;
  > .summary-title {
    @include subTitle($primary);
  }
  > .summary-des {
    padding-top: .5rem;
    @include des($white);
  }
}
</style>
