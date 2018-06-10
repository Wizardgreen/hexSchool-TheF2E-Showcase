
<template lang="pug">
.todo-item(:class="{stared: info.isStared}")
  .content
    .check-box(@click="toggleCompleted")
      .icon.check(:class="{actived: info.isComplete}")
        i.fas.fa-check-square
      .icon.solid(:class="{hide: info.isComplete}")
        i.fas.fa-square
    input.title-editor(v-if="isEditing" v-model="cache.title")
    span.todo-title(:class="{completed: info.isComplete}" v-else) {{ cache.title }}
    ul.thumbnail
      li.star(@click="toggleStar")
        .icon.solid(:class="{actived: info.isStared}")
          i.fas.fa-star.fa-lg
        .icon.hollow(:class="{hide: info.isStared}")
          i.far.fa-star.fa-lg
      li.edit(@click="toggleEdit")
        .icon.solid(:class="{actived: isEditing}")
          i.fas.fa-edit.fa-lg
        .icon.hollow(:class="{hide: isEditing}")
          i.far.fa-edit.fa-lg
  .add-on(v-if="info.hasAddOn")
    .icon(v-if="info.deadLine[0]")
      i.far.fa-calendar-alt.fa-sm
      span {{ info.deadLine[0] }}
    .icon(v-if="info.file")
      i.far.fa-file.fa-sm
    .icon(v-if="info.comment")
      i.far.fa-comment.fa-sm
  TodoEditBlock(
    mode="editTodo"
    :originData="info"
    :partData="cache"
    :isEditing="isEditing"
    :title="cache.title"
    @closeEditBlock="closeEditBlock"
    @modifyList="applyModify"
    )
</template>

<script>
import TodoEditBlock from './TodoEditBlock';
export default {
  name: 'TodoItem',
  data() {
    return {
      isEditing: false,
      cache: {
        title: '',
      },
    }
  },
  props: {
    info: Object,
    index: Number,
  },
  methods: {
    toggleEdit() {
      this.isEditing = !this.isEditing;
    },
    closeEditBlock() {
      this.isEditing = false;
    },
    toggleStar() {
      this.info.isStared = !this.info.isStared;
    },
    toggleCompleted() {
      this.info.isComplete = !this.info.isComplete;
    },
    applyModify(item) {
      this.$emit('applyModify', item, this.index);
      this.closeEditBlock();
    }
  },
  mounted() {
    const { isStared, isComplete, title } = this.info;
    this.cache = {
      title: title,
    }
  },
  components: {
    TodoEditBlock,
  }
}
</script>

<style lang="scss" scoped>
.task-input + .todo-item {
  margin-top: 1.5rem;
}
.todo-item {
  margin-top: .5rem;
  min-height: 76px;
  border-radius: 2px;
  background-color: #f2f2f2;
  transition: background-color .3s ease-in-out;
  &.stared {
    background-color: #FFF2DC;
  }
}
.content {
  display: flex;
  align-items: center;
  height: 76px;
  position: relative;
}
.title-editor {
  width: 100%;
  height: 100%;
  padding-left: 2rem;
  font-size: 24px;
  background-color: transparent;
  border: none;
}
.add-on {
  height: 26px;
  .icon {
    position: relative;
    top: -.5rem;
    margin: 0 .5rem;
    color: #757575;
    font-size: 1.3rem;
    &:first-child {
      margin-left: 72px;
    }
    span {
      margin-left: .5rem;
      font-size: 1rem;
    }
  }
}
.check-box {
  margin-left: 2rem;
  position: relative;
  top: -.9rem;
  > .icon {
    position: absolute;
    left: -.5rem;
    font-size: 1.3rem;
    &.check {
      opacity: 0;
      color: #4A90E2;
      &.actived {
        opacity: 1;
      }
    }
    &.solid {
      color: #fff;
      &:hover {
        color: #4A90E2;
      }
      &.hide {
        opacity: 0;
      }
    }
  }
}
.todo-title {
  margin-left: 2rem;
  font-size: 1.5rem;
  &.completed {
    color:  #9B9B9B;
    text-decoration:line-through;
  }
}
.thumbnail {
  display: flex;
  width: 80px;
  position: absolute;
  right: 2rem;
  justify-content: space-between;
}
.star, .edit {
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
  > .icon {
    top: 0;
    left: 0;
    position: absolute;
    transition: opacity .3s ease-in-out;
    &.solid {
      z-index: 10;
      opacity: 0;
    }
    &.actived {
      opacity: 1;
    }
    &.hide {
      opacity: 0;
    }
  }
}
.star {
  .solid {
    color: #F5A623;
  }
}
.edit {
  .solid {
    color: #4A90E2;
  }
}
</style>
