
<template lang="pug">
.edit-block(:class="{editing: isEditing}")
  .content.warp
    .section.dead-line
      .sub-title
        i.far.fa-calendar-alt.fa-sm
        span Deadline
      .row
        input.date(v-model="cache.deadLine[0]" type="text" placeholder="yyyy/mm/dd")
        input.min(v-model="cache.deadLine[1]" type="text" placeholder="hh:mm")
    .section.file
      .sub-title
        i.far.fa-file.fa-sm
        span File
      label(for="upload") +
      input#upload(type="file" name="upload")
    .section.comment
      .sub-title
        i.far.fa-comment.fa-sm
        span Comment
      textarea.memo(v-model="cache.comment" placeholder="Type your memo here...")
  ButtonGroup(
    :mode="mode"
    @clickRedBtn="closeEditBlock"
    @clickBlueBtn="modifyList"
    )
</template>

<script>
import ButtonGroup from './ButtonGroup';
export default {
  name: 'TodoEditBlock',
  data() {
    return {
      cache: {
        deadLine: ['', ''],
        file: '',
        comment: '',
        id: '',
        hasAddOn: false,
      },
      stringifyData: '',
    }
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: 'addNewTodo',
    },
    isEditing: {
      type: Boolean,
      default: false,
    },
    originData: {
      type: Object,
    },
    partData: {
      type: Object,
      default: {},
    },
  },
  methods: {
    closeEditBlock(mode) {
      if (mode === 'addNewTodo') {
        this.cache = {
          deadLine: ['', ''],
          file: '',
          comment: '',
          id: '',
        };
      }
      if (mode === 'editTodo') {
        this.cache = JSON.parse(this.stringifyData);
      }
      this.$emit('closeEditBlock');
    },
    modifyList(mode) {
      // 沒有輸入名稱則無效
      const { title } = this;
      
      if (!title) return;
      let item = {};
      if (mode === 'addNewTodo') {
        const timeStamp = JSON.stringify(Math.floor(Date.now()));
        item = {
          ...this.cache,
          title,
          id: timeStamp,
          isComplete: false,
          isStared: false,
        };
        // 判斷有無追加項目，有的話就讓 item 拓展介面
        if (item.deadLine[0] || item.file || item.comment) {
          item.hasAddOn = true;
        }
        this.$emit('modifyList', item);
        this.cache = {
          deadLine: ['', ''],
          file: '',
          comment: '',
          id: '',
        };
      }
      else if (mode === 'editTodo') {
        item = {
          ...this.cache,
          ...this.partData,
        }
        if (item.deadLine[0] || item.file || item.comment) {
          item.hasAddOn = true;
        }
        else {
          item.hasAddOn = false;
        }
        this.$emit('modifyList', item);
      }
    }
  },
  watch: {
    originData() {
      if (this.originData !== undefined) {
        this.stringifyData = JSON.stringify(this.originData);
        this.cache = JSON.parse(this.stringifyData);
      }
    },
  },
  mounted() {
    if (this.originData !== undefined) {
      this.stringifyData = JSON.stringify(this.originData);
      this.cache = JSON.parse(this.stringifyData);
    }
  },
  components: {
    ButtonGroup,
  },
}
</script>

<style lang="scss" scoped>
.edit-block {
  position: relative;
  height: 0;
  background-color: #F2F2F2;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 4px 4px 0 #C8C8C8;
  overflow: hidden;
  transition: height .7s ease-in-out, border-top .7s ease-in-out;
  &.editing {
    border-top: 2px solid #C8C8C8;
    height: 443px;
  }
}
.warp {
  margin: 0 auto;
  width: 455px;
}
.section {
  margin-top: 24px;
  .sub-title {
    margin-bottom: .5rem;
  }
  &.dead-line {
    input {
      height: 35px;
      width: 162px;
      border: none;
      border-radius: 2px;
      padding-left: 1rem;
      &::placeholder {
        font-size: 1rem;
        color: #C8C8C8;
      }
      &:first-child {
        margin-right: .5rem;
      }
    }
  }
  &.file {
    label[for="upload"] {
      display: inline-block;
      width: 2rem;
      height: 2rem;
      border-radius: 2px;
      color: #fff;
      background-color: #C8C8C8;
      text-align: center;
      font-size: 1.3rem;
      line-height: 2rem;
      cursor: pointer;
      transition: background-color .2s ease-in-out;
      &:hover {
        background-color: #ddd;
      }
    }
    input[type="file"] {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      border: 0;
    }
  }
  &.comment {
    textarea {
      width: 100%;
      height: 120px;
      border: none;
      border-radius: 2px;
      padding: .5rem 1rem;
      font-size: 1rem;
      color: #333;
    }
  }
}
.sub-title {
  position: relative;
  font-size: 20px;
  font-weight: bold;
  .svg-inline--fa {
    position: absolute;
    top: .15rem;
    left: -1.8rem;
  }
}
</style>

