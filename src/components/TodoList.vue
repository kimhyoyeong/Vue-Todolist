<template>
  <div>
    <ul class="todo-list">
      <li v-for="(item, key) in todoData"
          :key="key"
          class="todo" >
        <div class="view">
          <TodoCheckbox
              :label="item.title"
              v-model="item.completed"
              :checked="item.completed" />
          <button class="destroy" @click="removeTodo(item)"></button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import TodoCheckbox from "@/components/TodoCheckbox";

export default {
name: "TodoList",
  components: { TodoCheckbox },
  data() {
    return {
      todoData: [
        {
          title: 'vue todo 리스트 만들기',
          created_at: '2021-04-14 20:00:00',
          completed: true,
        },
        {
          title: '리스트 컴포넌트 만들기',
          created_at: '2021-04-18 15:00:00',
          completed: false,
        }
      ]
    }
  },
  methods: {
    removeTodo(item) {
      console.log(item)
      // 리스트 아이템 삭제 코드
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-list {
  background-color: #ffffff;

  li {
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;

    .destroy {
      display: none;
      position: absolute;
      top: 0;
      right: 10px;
      bottom: 0;
      width: 40px;
      height: 40px;
      margin: auto 0;
      margin-bottom: 11px;
      font-size: 30px;
      color: #fc4545;

      &::after {
        content: 'x'
      }
    }

    &:hover {
      .destroy {
        display: block;
      }
    }
  }
}
</style>