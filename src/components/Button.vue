<template>
  <button
    class="button"
    :class="outward"
    @click="clickFunc"
    v-html="text"
  />
</template>

<script>
export default {
  name: 'Button',
  props: {
    'text': String,
    'clickFunc': Function,
    'outward': {
      default: 'major',
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.button{
  padding: 0.375rem 0.75rem;
  border: 1px solid #222;
  border-radius: .25rem;
  color: #fff;
  background-color: #222;
  font-size: 1rem;
  letter-spacing: .1rem;
  text-align: center;
  line-height: 1.5;
  transition: all .3s ease-in-out;
}

// ButtonType
.major {
  color: #fff;
  background-color: #222;
  &:hover {
    color: #d6b161;
  }
}
.outline {
  color: #222;
  background-color: transparent;
  &:hover {
    color: #d6b161;
    background-color: #222;
  }
  &:active {
    border: 1.5px solid #d6b161;
  }
}

// <div class="lds-ripple"><div></div><div></div></div>
// loading
.loading {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.loading div {
  position: absolute;
  border: 4px solid #d6b161;
  opacity: 1;
  border-radius: 50%;
  animation: loading 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.loading div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes loading {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}
</style>
