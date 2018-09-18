<template lang="pug">
.todo-list
  FilterNav(:mode="filter" @clickTab="switchFilter")
  .week1-container
    TaskInput(@addTodo="addTodo")
    draggable(:list="staredList")
      TodoItem(
        v-for="(item, index) in filtedStaredList"
        :info="item"
        :index="index"
        @applyModify="modify"
        :key="item.id"
        )
    draggable(:list="normalList")
      TodoItem(
        v-for="(item, index) in filterNormalList"
        :info="item"
        :index="index"
        @applyModify="modify"
        :key="item.id"
        )
</template>

<script>
import draggable from 'vuedraggable';
import FilterNav from '../components/week1/FilterNav.vue';
import TaskInput from '../components/week1/TaskInput.vue';
import TodoItem from '../components/week1/TodoItem.vue';

export default {
  name: 'TodoList',
  data() {
    return {
      todoList: [
        {"title":"模仿設計稿","deadLine":["",""],"file":"","comment":"","id":"15284619qwfq80147","isComplete":true,"isStared":false,"isEditing":false,"hasAddOn":false},
        {"title":"彈性元件","deadLine":["121212",""],"file":"","comment":"花了好多時間讓input跟todoItem都能共用同一個編輯區塊元件","id":"1528461asdasd985202","isComplete":true,"isStared":true,"isEditing":false,"hasAddOn":true},
        {"title":"學會Pug","deadLine":["",""],"file":"","comment":"21e12e","id":"15284619qwdqwdfq92057","isComplete":true,"isStared":true,"isEditing":false,"hasAddOn":true},
        {"title":"檔案上傳","deadLine":["2018/06/11","12:30"],"file":"","comment":"我看是來不及做了拉","id":"15284619qgw2057","isComplete":false,"isStared":false,"isEditing":false,"hasAddOn":true},
        {"title":"不用框架製作流暢的介面","deadLine":["",""],"file":"","comment":"","id":"15284qwg92057","isComplete":true,"isStared":false,"isEditing":false,"hasAddOn":true},
        {"title":"Vue.Draggable","deadLine":["",""],"file":"","comment":"拖移時的畫面呈現會有些錯誤","id":"15057","isComplete":true,"isStared":false,"isEditing":false,"hasAddOn":true},
        {"title":"資料驗證","deadLine":["",""],"file":"","comment":"是很容易，但我真的沒時間了 囧","id":"152qgqgq84qwg92057","isComplete":false,"isStared":false,"isEditing":false,"hasAddOn":true},
      ],
      filter: 'All',
      staredList: [],
      normalList: []
    }
  },
  methods: {
    addTodo(item) {
      this.$set(this.todoList, this.todoList.length, item);
    },
    modify(item, index) {
      const data = {
        ...this.todoList[index],
        ...item,
      }
      this.$set(this.todoList, index, data);
    },
    switchFilter(mode) {
      this.filter = mode;
    },
    listFilter(list, vm) {
      return list.filter(item => {
        if (vm.filter === 'All') {
          return true;
        }
        else if (vm.filter === 'Progress') {
          return !item.isComplete;
        }
        else if (vm.filter === 'Completed') {
          return item.isComplete;
        }
      })
    },
  },
  computed: {
    filtedStaredList() {
      const vm = this;
      return vm.listFilter(vm.staredList, vm);
    },
    filterNormalList() {
      const vm = this;
      return vm.listFilter(vm.normalList, vm);
    },
  },
  watch: {
    todoList() {
      const vm = this;
      const stringifyData = JSON.stringify(vm.todoList)
      window.localStorage.setItem('Greene\'sTodoList', stringifyData);
      vm.staredList = vm.todoList.filter(todo => todo.isStared);
      vm.normalList = vm.todoList.filter(todo => !todo.isStared);
    }
  },
  mounted() {
    const vm = this;
    const data = window.localStorage['Greene\'sTodoList'];
    if (data && (data !== '{}')) {
      vm.todoList = JSON.parse(data);
    }
    vm.staredList = vm.todoList.filter(todo => todo.isStared);
    vm.normalList = vm.todoList.filter(todo => !todo.isStared);
  },
  components: {
    draggable,
    FilterNav,
    TaskInput,
    TodoItem,
  }
}
</script>

<style lang="scss">
.todo-list {
  min-height: 120vh;
  background-color: #E1E1E1;
  * {
    font-family: 'Roboto-Medium';
  }
}
.week1-container {
  margin: 0 auto;
  width: 620px;
}
</style>
