
<template lang="pug">
.btn-group
  button.btn-cancel(@click="handleRedBtn")
    i.fas.fa-times
    span.name Cancel
  button.btn-add(@click="handleBlueBtn")
    i.fas.fa-plus
    span.name(v-if="mode === 'editTodo'") Save
    span.name(v-else) Add Task
</template>

<script>
export default {
  name: 'ButtonGroup',
  props: {
    mode: {
      type: String,
      required: true,
    }
  },
  methods: {
    handleBlueBtn() {
      const { mode } = this;
      this.$emit('clickBlueBtn', mode);
    },
    handleRedBtn() {
      const { mode } = this;
      this.$emit('clickRedBtn', mode);
    },
  },
}
</script>

<style lang="scss" scoped>
.btn-group {
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
  button {
    flex: 1;
    height: 60px;
    border: none;
    font-size: 25px;
    .svg-inline--fa {
      margin-right: 1rem; 
    }
  }
}
.btn-add, .btn-cancel {
  transition: background-color .3s ease-in-out;
}
.btn-cancel {
  border-radius: 0 0 0 5px;
  color: #D0021B;
  background-color: #fff;
  &:hover {
    background-color: #ececec;
  }
}
.btn-add {
  border-radius: 0 0 5px 0;
  color: #fff;
  background-color: #4A90E2;
  &:hover {
    background-color: #3982D7;
  }
}
</style>
