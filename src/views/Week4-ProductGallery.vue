<template lang="pug">
  .product-gallery(@click="isActived = !isActived", :class="{actived: isActived}")
    .logo(v-if="isActived")
      span Powered by Greene
    .logo(v-else)
      span CCCLOTHES
    .title(v-if="isActived" style="font-size: 3rem") KNOW YOUR MEME
    .title(v-else) MEN'S TOPS
    .product.product-1(:class="{actived: isActived}")
      .name(data-title="Nyan Cat" v-if="isActived") Nyan Cat
      .name(data-title="LINEN BLAZER" v-else) LINEN BLAZER
      .nth 01
      .des Men's outfit
      .slash
      .hollow
      .solid
    .product.product-2(:class="{actived: isActived}")
      .name(data-title="MLG Frog" v-if="isActived") MLG Frog
      .name(data-title="FREELIFT" v-else) FREELIFT
      .nth 02
      .des Men's basics
      .slash
      .hollow
      .solid
    .product.product-3(:class="{actived: isActived}")
      .name(data-title="Sad Guy Beach" v-if="isActived") Sad Guy Beach
      .name(data-title="SUPER SKINNY" v-else) SUPER SKINNY
      .nth 03
      .des Men's pattern shirts
      .slash
      .hollow
      .solid
    .product.product-4(:class="{actived: isActived}")
      .name(data-title="Pepe" v-if="isActived") Pepe
      .name(data-title="DENIM" v-else) DENIM
      .nth 04
      .des Men's cadual
      .slash
      .hollow
      .solid
    .product.product-5(:class="{actived: isActived}")
      .name(data-title="Get Out Frog" v-if="isActived") Get Out Frog
      .name(data-title="SWEATSHIRTS" v-else) SWEATSHIRTS
      .nth 05
      .des Men's jacket
      .slash
      .hollow
      .solid
    .product.product-6(:class="{actived: isActived}")
      .name(data-title="Eddy Wally's Wow" v-if="isActived") Eddy Wally's Wow
      .name(data-title="VINTAGE DENIM" v-else) VINTAGE DENIM
      .nth 06
      .des Men's classic
      .slash
      .hollow
      .solid
    .product.product-7(:class="{actived: isActived}")
      .name(data-title="Science! Bitch!" v-if="isActived") Science! Bitch!
      .name(data-title="EDITION" v-else) EDITION
      .nth 07
      .des Men’s shirts
      .slash
      .hollow
      .solid
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

export default Component({})(
  class ProductGallery extends Vue {
    isActived = false;
  }
)
</script>

<style lang="scss" scoped>
@import '../assets/scss/week4only.scss';
@mixin round($type, $sec, $point) {
  animation: $type infinite linear $sec;
  transform-origin: $point;
}
@keyframes r1 {
  0% {transform: rotate(0deg) translateX(5px) rotate(0deg);}
  100% {transform: rotate(360deg) translateX(5px) rotate(-360deg);}
}
@keyframes r2 {
  0% {transform: rotate(0deg) translateX(7.5px) rotate(0deg);}
  100% {transform: rotate(360deg) translateX(7.5px) rotate(-360deg);}
}
@keyframes r3 {
  0% {transform: rotate(0deg) translateX(10px) rotate(0deg);}
  100% {transform: rotate(360deg) translateX(10px) rotate(-360deg);}
}
@keyframes r4 {
  0% {transform: rotate(0deg) translateX(12.5px) rotate(0deg);}
  100% {transform: rotate(360deg) translateX(12.5px) rotate(-360deg);}
}

* {
  transition: all .5s;
}
.product-gallery {
  display: grid;
  margin: 2rem auto;
  width: 960px;
  grid-template-columns: repeat(8, 120px);
  grid-template-rows: repeat(20, 100px);
}
.logo {
  display: grid;
  grid-column: 1/9;
  grid-row: 1;
  text-align: center;
  align-self: start;
  justify-self: center;
  > span {
    padding: 0 5px;
    background-color: #000;
    color: #FFF;
    @include Logo();
  }
}
.title {
  margin-bottom: -20px;
  grid-row: 1;
  grid-column: 3/7;
  align-self: end;
  text-align: center;
  @include title;
}
.name, .nth, .des, .hollow, .solid, .slash {
  position: absolute;
}
.nth, .des, .hollow, .solid {
  z-index: -1;
}
.name, .nth, .des {
  z-index: 2;
}
.name, .nth {
  @include title2;
}
.name {
  &:after, &:before {
    position: absolute;
    left: 0;
    content: attr(data-title);
    overflow: hidden;
  }
  &:after {
    top: -10px;
    height: 23px;
    color: $theme-black-3;
  }
  &:before {
    top: -20px;
    height: 25px;
    color: $theme-black-1;
  }
}
.des {
  @include title3i;
}
.solid, .hollow {
  width: 240px;
  height: 200px;
}
.solid {
  background-color: $tiffany-green;
}
.hollow {
  border: 20px solid $tiffany-green;
  z-index: -1;
}
.slash {
  background: repeating-linear-gradient(135deg,
    $tiffany-green 0px, $tiffany-green 20px,
    transparent 20px, transparent 40px
  );
  width: 240px;
  height: 100px;
}
.product {
  position: relative;
  &.actived {
    &.product-1 {
      background-image: url('https://i.imgur.com/MncaYBG.gif');
      .name {@include round(r2, 3s, 10%);}
      .nth {@include round(r2, 1s, 24%);}
      .des {@include round(r1, 3s, 50%);}
      .slash {@include round(r4, 3s, 42%);}
      .hollow {@include round(r2, 1s, 22%);}
      .solid {@include round(r3, 1s, 30%);}
    }
    &.product-2 {
      background-image: url('https://i.imgur.com/D1ja74s.gif');
      .name {@include round(r3, 1s, 27%);}
      .nth {@include round(r4, 2s, 42%);}
      .des {@include round(r2, 3s, 62%);}
      .slash {@include round(r4, 2s, 33%);}
      .hollow {@include round(r4, 1s, 41%);}
      .solid {@include round(r3, 3s, 14%);}
    }
    &.product-3 {
      background-image: url('https://i.imgur.com/dlG0odv.jpg');
      .name {@include round(r1, 3s, 22%);}
      .nth {@include round(r3, 2s, 32%);}
      .des {@include round(r4, 3s, 52%);}
      .slash {@include round(r3, 1s, 43%);}
      .hollow {@include round(r3, 4s, 27%);}
      .solid {@include round(r4, 1s, 20%);}
    }
    &.product-4 {
      background-image: url('https://i.imgur.com/maFgbvk.jpg');
      .name {@include round(r2, 2s, 42%);}
      .nth {@include round(r1, 1s, 31%);}
      .des {@include round(r4, 3s, 47%);}
      .slash {@include round(r4, 1s, 10%);}
      .hollow {@include round(r4, 3s, 20%);}
      .solid {@include round(r3, 4s, 33%);}
    }
    &.product-5 {
      background-image: url('https://i.imgur.com/HliIvyX.gif');
      .name {@include round(r1, 1s, 42%);}
      .nth {@include round(r2, 2s, 22%);}
      .des {@include round(r4, 3s, 71%);}
      .slash {@include round(r4, 3s, 82%);}
      .hollow {@include round(r4, 2s, 10%);}
      .solid {@include round(r1, 1s, 40%);}
    }
    &.product-6 {
      background-image: url('https://i.imgur.com/RK7lCcd.gif');
      .name {@include round(r4, 3s, 101%);}
      .nth {@include round(r2, 1s, 72%);}
      .des {@include round(r4, 3s, 60%);}
      .slash {@include round(r4, 1s, 30%);}
      .hollow {@include round(r2, 3s, 40%);}
      .solid {@include round(r1, 2s, 55%);}
    }
    &.product-7 {
      background-image: url('https://i.imgur.com/6RRM2P9.jpg');
      .name {@include round(r2, 4s, 41%);}
      .nth {@include round(r3, 1s, 20%);}
      .des {@include round(r4, 3s, 41%);}
      .slash {@include round(r4, 3s, 100%);}
      .hollow {@include round(r1, 1s, 80%);}
      .solid {@include round(r3, 1s, 100%);}
    }
    
  }
}
// upon golobl
.product-1 {
  grid-column: 1/5;
  grid-row: 3/7;
  background-image: url('https://images.unsplash.com/photo-1513827379601-9dba5099a3f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1acdd78f34ee75aade9e313251bb1695&auto=format&fit=crop&w=2468&q=80');
  background-position: center;
  background-size: cover;
  .name {
    transform: translateY(-30%)
  }
  .nth {
    bottom: 0;
    transform: translateY(100%);
  }
  .des {
    right: 0;
    bottom: -1.5rem;
    writing-mode: vertical-lr;
    transform: translateX(100%);
  }
  .solid {
    display: none;
  }
  .hollow {
    right: 0;
    transform: translate(20%, -25%)
  }
  .slash {
    bottom: 0;
    left: 56px;
    transform: translateY(50%);
  }
}
.product-2 {
  grid-column: 6/8;
  grid-row: 4/6;
  background-image: url('https://images.unsplash.com/photo-1514632542677-48fae74a01b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cf412aceb1d689765e387d30fca7210a&auto=format&fit=crop&w=668&q=80');
  background-position: center;
  background-size: cover;
  .name, .solid, .hollow {
    right: 0;
  }
  .name {
    bottom: 0;
    transform: translate(35%, 120%);
  }
  .nth {
    top: -100px;
    right: -120px;
  }
  .des {
    left: -1rem;
    transform: translateY(-100%);
  }
  .solid {
    transform: translate(25%, -25%);
  }
  .hollow {
    transform: translate(50%, -50%);
  }
  .slash {
    display: none;
  }
}
.product-3 {
  grid-column: 1/5;
  grid-row: 9/11;
  background-image: url('https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-0.3.5&s=874cc02cb8392531e8598ea2ea9b8a30&auto=format&fit=crop&w=1500&q=80');
  background-position: center;
  background-size: cover;
  .name {
    right: 0;
    transform: translateY(-100%);
  }
  .nth {
    right: 0;
    bottom: 0;
    transform: translate(100%, 100%);
  }
  .des {
    bottom: 0;
    left: 2rem;
    transform: translateY(100%);
  }
  .solid {
    transform: translateY(-25%);
  }
  .hollow {
    right: 0;
    bottom: 0;
    transform: translate(25%, 25%);
  }
  .slash {
    display: none;
  }
}
.product-4 {
  grid-column: 7/9;
  grid-row: 9/13;
  background-image: url('https://images.unsplash.com/photo-1484516758160-69878111a911?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=39466d66952b133d5a5cff642b970d05&auto=format&fit=crop&w=774&q=80');
  background-position: center;
  background-size: cover;
  .name {
    transform: translate(-65%, 100%) rotate(270deg);
  }
  .nth {
    bottom: 0;
    transform: translateX(-100%);
  }
  .des {
    right: 3rem;
    writing-mode: vertical-lr;
    transform: translateY(-100%);
  }
  .solid {
    display: none;
  }
  .hollow {
    transform: translate(-25%, -50%);
  }
  .slash {
    bottom: 0;
    transform: translateY(50%);
  }
}
.product-5 {
  grid-column: 3/5;
  grid-row: 13/15;
  background-image: url('https://images.unsplash.com/photo-1525448198276-222de3961638?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43fb25556cdbd191e520c7f28739e40d&auto=format&fit=crop&w=1500&q=80');
  background-position: center;
  background-size: cover;
  .name {
    left: -240px;
    transform: translateY(100%);
  }
  .nth {
    bottom: 0;
    left: -120px;
  }
  .des {
    right: 0;
    transform: translateX(100%);
  }
  .solid {
    display: none;
  }
  .hollow {
    bottom: 0;
    height: 100px;
    transform: translate(-50%, 50%);
  }
  .slash {
    transform: translate(-75%, -75%);
  }
}
.product-6 {
  grid-column: 5/9;
  grid-row: -3/-7;
  background-image: url('https://images.unsplash.com/photo-1519406709381-c1f293304b28?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98c497a29f229085d9574ee8b6eeef8c&auto=format&fit=crop&w=668&q=80');
  background-size: cover;
  background-position: center;
  .name {
    right: 0;
    transform: translateY(-100%);
  }
  .nth {
    top: 150px;
    transform: translateX(-100%);
  }
  .des {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 100%);
  }
  .solid {
    bottom: 0;
    transform: translateX(-25%);
  }
  .hollow {
    bottom: 0;
    width: 480px;
    transform: translateY(25%);
  }
  .slash {
    display: none;
  }
}
.product-7 {
  grid-column: 1/3;
  grid-row: -1/-5;
  background-image: url('https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjF9&s=c3fe320bd592fb75fb54bf245817450d&auto=format&fit=crop&w=668&q=80');
  background-size: cover;
  background-position: center;
  .name {
    right: 0;
    transform: rotate(90deg) translate(36%, -250%);
  }
  .nth {
    bottom: 0;
    right: -120px;
  }
  .des {
    transform: translateY(-100%);
  }
  .solid {
    right: 0;
    bottom: 0;
    transform: translateX(50%);
  }
  .hollow {
    width: 240px;
    height: 400px;
    transform: translate(25%, -12.5%);
  }
  .slash {
    display: none;
  }
}
</style>
