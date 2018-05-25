<template>
  <div>
    <button
      class="button outline"
      @click="clickFunc"
    >{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: 'PrimaryBtn',
  props: {
    'text': String,
    'clickFunc': Function,
  },
}
</script>

<style lang="scss" scoped>
.button{
  width: 4.5rem;
  height: 2rem;
  border: 1px solid #222;
  border-radius: 1rem;
  color: #fff;
  background-color: #222;
  font-size: .9rem;
  letter-spacing: 3px;
  transition: all .3s ease-in-out;
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
.major {
  color: #fff;
  background-color: #222;
  &:hover {
    color: #d6b161;
  }
}
</style>
