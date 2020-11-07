<template>
  <div>
    <TodoList />
  </div>
</template>

<script>
import TodoList from './views/TodoList.vue'
export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>
