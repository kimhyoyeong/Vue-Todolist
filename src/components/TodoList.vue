<template>
  <div>
    <ul class="todo-list">
      <li v-for="(item, key) in list"
          :key="key"
          class="todo" >
        <div class="view">
          <TodoCheckbox
              :label="item.title"
              v-model="item.completed"
              :checked="item.completed" />
          <span>{{ $moment(item.created_at).format('YYYY-MM-DD HH:mm') }}</span>
          <button class="destroy" @click="removeTodo(item)"></button>
        </div>
      </li>
      <li v-if="list.length===0">
        데이터가 없습니다.
      </li>
    </ul>
  </div>
</template>

<script>
import TodoCheckbox from "@/components/TodoCheckbox";

export default {
name: "TodoList",
  components: { TodoCheckbox },
  props: {
    list: {
      type: Array,
    },
  },
  methods: {
    removeTodo(item) {
      console.log(item)
      // 리스트 아이템 삭제 코드
    },
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