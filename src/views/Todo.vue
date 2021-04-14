<template>
  <base-layout>
    <TodoInput/>
    <TodoSelect/>
    <todo-list>
      <todo-list-item>
        내용
      </todo-list-item>
    </todo-list>
  </base-layout>
</template>

<script>
import BaseLayout from '@/layouts/todo/Index'
import TodoInput from '@/components/TodoInput'
import TodoSelect from '@/components/TodoSelect'
import TodoList from '@/components/TodoList'
import TodoListItem from '@/components/TodoListItem'

export default {
  name: "Todo",
  components: {
    BaseLayout, TodoInput, TodoSelect, TodoList, TodoListItem
  }
}
</script>

<style scoped>

</style>