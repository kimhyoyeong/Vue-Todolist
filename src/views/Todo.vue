<template>
  <base-layout>
    <!-- input box -->
    <div class="input-box">
      <TodoInput
      type="text"
      placeholder="Please enter text here"/>
      <todo-button>
        <img src="@/assets/images/btn_go.png" alt="">
      </todo-button>
    </div>
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
import TodoButton from '@/components/TodoButton'
import TodoSelect from '@/components/TodoSelect'
import TodoList from '@/components/TodoList'
import TodoListItem from '@/components/TodoListItem'

export default {
  name: "Todo",
  components: {
    BaseLayout, TodoInput, TodoButton, TodoSelect, TodoList, TodoListItem
  }
}
</script>

<style scoped>

</style>