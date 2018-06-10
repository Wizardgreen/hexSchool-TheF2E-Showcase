
<template lang="pug">
  .task-input
    label.add(:class="{editing: isEditing}")
      i.fas.fa-plus
      input(
        @focus="showEditBlock"
        @keyup.esc="closeEditBlock"
        v-model="title"
        type="text" placeholder="Add Task"
        )
      TodoEditBlock(
        :title="title"
        :isEditing="isEditing"
        :partData="{'title': title}"
        @closeEditBlock="closeEditBlock"
        @modifyList="addTodo"
        )
</template>

<script>
import TodoEditBlock from './TodoEditBlock';
export default {
  name: 'TaskInput',
  data() {
    return {
      isEditing: false,
      title: '',
    }
  },
  methods: {
    showEditBlock() {
      this.isEditing = true;
    },
    closeEditBlock() {
      this.isEditing = false;
      this.title = '';
    },
    addTodo(item) {
      this.$emit('addTodo', item);
      this.closeEditBlock();
    },
  },
  components: {
    TodoEditBlock,
  }
}
</script>

<style lang="scss" scoped>
.task-input {
  margin-top: 24px;
}
.add {
  display: inline-block;
  position: relative;
  height: 65px;
  width: 100%;
  border: 2px solid #C8C8C8;
  border-radius: 5px;
  background-color: #fff;
  transition: all .7s ease-in-out;
  &.editing {
    height: 76px;
    background-color: #F2F2F2;
    border: none;
    border-radius: 5px 5px 0 0;
  }
  input {
    position: relative;
    width: 100%;
    height: 100%;
    padding-left: 4rem;
    font-size: 24px;
    font-weight: bold;
    border: none;
    background-color: transparent;
    &::placeholder {
      font-size: 24px;
      font-weight: normal;
      color: #C8C8C8;
    }
  }
  .fa-plus {
    position: absolute;
    top: 50%;
    left: 6%;
    color: #C8C8C8;
    transform: translateY(-50%);
  }
}
</style>
