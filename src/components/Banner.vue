
<template>
  <div
    class="banner"
    :class="{'actived': isBannerActived}"
    :style="{'background-image': `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), ${info.picture}`}"
    @mouseover="handleShow"
    @mouseout="handleShow"
    >
    <div class="content" v-if="info.release">
      <div
        class="card"
        :class="{'show': isCardShow}"
        v-if="info.needCard"
        >
      </div>
      <div
        class="week"
        @transitionend.self="handleTitleFade"
        >
        <div class="link github" :class="{'flipIn': isLinksFlipIn}" v-if="!info.disableGit">
          <a :href="info.githubLink" target="_blank"><i class="fab fa-lg fa-github" /></a>
        </div>
        Week 
        <span class="nth">{{ info.nth }}</span>
        <div class="link comment" :class="{'flipIn': isLinksFlipIn}" v-if="!info.disableCom">
          <a :href="info.commentLink" target="_blank"><i class="fas fa-lg fa-comment-dots" /></a>
        </div>
      </div>
      <router-link :to="info.route">
        <p
          class="title"
          :class="{'show': isTitleShow}"
          >
          {{ info.title }}
        </p>
      </router-link>
    </div>
    <div class="notReady" v-else>
      <div
        class="week"
        @transitionend.self="handleTitleFade"
        >
        Week 
        <span class="nth">{{ info.nth }}</span>
      </div>
      <div class="title" :class="{'show': isTitleShow}">
        <p>Not Yet Released !</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Banner',
  data() {
    return {
      isBannerActived: false,
      isCardShow: false,
      isTitleShow: false,
      isLinksFlipIn: false,
    }
  },
  props: {
    'info': Object,
  },
  methods: {
    handleShow() {
      this.isBannerActived = !this.isBannerActived;
      this.isCardShow = this.isBannerActived;
    },
    handleTitleFade() {
      this.isTitleShow = this.isBannerActived;
      if (this.isTitleShow) {
        setTimeout(() => this.isLinksFlipIn = true, 700);
      }
      this.isLinksFlipIn = false;
    },
  },
}
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
a {
  color: #fff;
  text-decoration: none;
}
.banner {
  display: flex;
  flex: 1;
  background-size:cover;
  background-position:center;
  transition: flex .7s ease-in-out, filter .7s ease-in-out;
  &.actived {
    flex: 3;
    .week {
      transform: translateY(-100%);
    }
  }
  color: #fff;
}
.content, .notReady {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  @media (min-width: 992px) {
    font-size: 2.2rem;
  }
  box-shadow:inset 0 0 0 5px rgba(255,255,255,0.1);
}
.content {
  position: relative;
  background-color: transparent;
}
.notReady {
  background-color: #222;
  hr {
    margin: 0;
    border-color: #d6b161;
  }
}
.card {
  width: 250px;
  height: 50px;
  position: absolute;
  background-color: #222;
  border-radius: 10px;
  opacity: 0;
  z-index: 5;
  transform: translateY(-8%);
  &.show {
    height: 150px;
    opacity: .7;
    transition: all .9s ease-in-out;
    @media (min-width: 992px) {
      height: 180px;
      width: 280px;
    }
  }
}
.link, .week, .title {
  position: relative;
  z-index: 10;
}
.link {
  display: inline-block;
  margin: 0 1rem;
  opacity: 0;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  &.flipIn {
    animation-name: flipIn;
  }
  @keyframes flipIn {
    from {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      animation-timing-function: ease-in;
      opacity: 1;
    }
    60% {
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    }
    80% {
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
    to {
      transform: perspective(400px);
      opacity: 1;
    }
  }
}
.week {
  transform: translateY(50%);
  transition: transform .7s cubic-bezier(0.61,-0.19, 0.7,-0.11);
}
.title {
  text-align: center;
  border-bottom: 2px solid #d6b161;
  transform: translateY(-50%);
  opacity: 0;
  &.show {
    opacity: 1;
    transition: opacity .7s ease-in-out;
  }
}
</style>
