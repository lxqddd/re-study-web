<!--
 * @Author       : your name
 * @Date         : 2020-11-06 21:38:14
 * @LastEditTime : 2020-11-07 10:08:52
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \re-study-web\正课\20201105\20201105+刘向前+vue-10\todo-list\src\views\TodoList.vue
-->

<template>
  <div>
    <input type="text" @keydown.enter="getInpValue" />
    <ul class="mt10" v-if="todos.length">
      <li v-for="(todo, index) in todos" :key="index" class="mt10">
        <span :class="['mr10', todo.status]">{{ todo.content }}</span>
        <el-button size="mini" type="success" @click="completeTodo(index)"
          >完成</el-button
        >
        <el-button size="mini" type="danger" @click="removeTodo(index)"
          >删除</el-button
        >
      </li>
    </ul>
    <div class="mt10">
      <el-button size="mini" type="primary" @click="allTodos">all</el-button>
      <el-button size="mini" type="primary" @click="activeTodo"
        >active</el-button
      >
      <el-button size="mini" type="primary" @click="completedTodo"
        >completed</el-button
      >
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  name: 'TodoList',
  setup() {
    const store = new useStore()
    let status = ref('all')

    const getInpValue = e => {
      store.commit('addTodo', {
        content: e.target.value,
        status: 'active'
      })
      e.target.value = ''
    }
    const removeTodo = index => {
      store.commit('removeTodo', index)
    }
    const completeTodo = index => {
      store.commit('completeTodo', index)
    }
    const allTodos = () => {
      status.value = 'all'
    }
    const activeTodo = () => {
      status.value = 'active'
    }
    const completedTodo = () => {
      status.value = 'complete'
    }
    const todos = computed(() => {
      switch (status.value) {
        case 'all':
          return store.state.todos
        case 'active':
          return store.state.todos.filter(todo => {
            return todo.status === 'active'
          })
        case 'complete':
          return store.state.todos.filter(todo => {
            return todo.status === 'complete'
          })
        default:
          break
      }
    })
    return {
      todos,
      getInpValue,
      removeTodo,
      completeTodo,
      allTodos,
      activeTodo,
      completedTodo
    }
  }
}
</script>

<style lang="scss" scoped>
.mt10 {
  margin-top: 10px;
}
.mr10 {
  margin-right: 10px;
}
.complete {
  text-decoration: line-through;
}
ul {
  padding: 0;
  li {
    list-style: none;
    padding: 0;
  }
}
</style>
