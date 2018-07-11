<template lang="pug">
  el-card.event-card(
    shadow='hover'
    :body-style="{padding: '.8rem'}"
  )
    ul
      li.time
        .title 發生時間: 
        span {{ formatTime }}
      li.location
        .title 受災地區: 
        span {{ location }}
      li.type
        .title 災害類型: 
        span  {{ type }}
      li.address
        .title 詳細地址: 
        span {{ locationDes }}
      li.des
        .title 災情描述: 
        span  {{ description }}
    .light(:class="{actived: isComplete}")
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { Card } from "element-ui";

export default Component({
  props: {
    isComplete: {
      type: Boolean,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    locationDes: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  components: {
    "el-card": Card
  }
})(
  class EventCard extends Vue {
    get formatTime() {
      return this.time.replace('T', " ")
    }
  }
);
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/sideQuest/_utils.scss";

.event-card {
  position: relative;
  ul > li {
    display: flex;
    @include text($text-listTitle);
    &.location > span {
      @include text($text-location);
    }
    &.type > span {
      @include text($text-event);
    }
  }
  ul > * + * {
    margin-top: 0.5rem;
  }
}
.title {
  display: inline-block;
  flex: 1.3;
  letter-spacing: 2px;
  & + span {
    flex: 3.7;
    word-break: break-all;
    @include text($text);
  }
}
.light {
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  background-color: #e8eaec;
  border-radius: 50%;
  &.actived {
    background-color: $text-location;
  }
}
</style>
