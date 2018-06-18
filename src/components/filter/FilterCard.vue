<template lang="pug">
  .filter-card
    .cover(
      :style="{backgroundImage:`url(${info.imageUrl})`}"
      v-if="info.imageUrl"
      )
    div.fake-cover(v-else)
      span 目前沒有提供圖片唷
    .info
      h3.event-title {{info.title}} 
      .address
        .icon.map
          i.fas.fa-map-marker-alt
        span {{info.showInfo[0].location}}
      .location
        .icon.point
          i.fas.fa-home
        span {{info.showInfo[0].locationName}}
      .date
        .icon.time
          i.fas.fa-clock
        span {{info.showInfo[0].time}}
      .anchor(v-if="info.webSales")
        .icon.link
          i.fas.fa-link
        a(:href="info.webSales") 活動連結
      // .price
      //   .icon.price
      //     i.fas.fa-dollar-sign
      //   span {{info.showInfo[0].price}}
</template>

<script>
export default {
  name: 'FilterCard',
  data() {
    return {
      
    }
  },
  props: {
    info: {
      type: Object,
      default: {},
      required: true, 
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variable.scss';
@import '../../assets//scss/breakpoint.scss';

.filter-card {
  margin-top: 25px;
  background-color: #fdfdfd;
  border-radius: 5px;
  &:last-child {
    margin-bottom: 1.5rem;
  }
  @include break-point($table) {
    display: flex;
  }
}
.cover, .fake-cover {
  min-height: 190px;
  width: 100%;
  border-radius: 5px 5px 0 0;
  @include break-point($table) {
    max-height: 220px;
    flex: 1;
    border-radius: 5px 0 0 5px;
  }
}
.cover {
  background-size: cover;
  background-position: center;
}
.fake-cover {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $major-black;
  > span {
    border-bottom: 2px solid $brand-color;
    color: #ddd;
    font-size: 1.2rem;
  }
}
.info {
  position: relative;
  width: 90%;
  min-height: 220px;
  margin: 0 auto;
  border-radius: 0 0 5px 5px;
  padding-bottom: 1rem;
  color: #333;
  @include break-point($table) {
    flex: 2;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
.event-title {
  padding-top: 1.5rem;
  font-size: 1.1rem;
}
.address {
  margin-top: 1rem;
}
.date, .anchor, .location {
  margin-top: .5rem;
}
.icon {
  background-color: #fff;
  & + span {
    margin-left: .5rem;
  }
  &.map {
    margin-left: .1rem;
    font-size: 1.2rem;
    color: $secondary-red;
    & + span {
      margin-left: .5rem;
    }
  }
  &.point {
    color: $secondary-blue;
    & + span {
      margin-left: .3rem;
    }
  }
  &.time {
    color: $secondary-green;
  }
  &.link {
    color: $moyu-golden;
    & + a {
      color: $major-black;
      margin-left: .4rem;
    }
  }
}
// .price {
//   display: inline-block;  
//   margin-top: 1rem auto 0 auto;
//   background-color: #222;
//   .icon {
//     margin-top: 0;
//     color: #d6b161;
//   }
// }
</style>
