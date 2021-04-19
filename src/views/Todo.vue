<template>
  <base-layout>
    <!-- 상단 정보 Start -->
    <div class="top">
      <p class="time-text">{{ message }}</p>
      <p class="tasks-count">
        <span><em>2</em>/4</span> 완료!
      </p>
    </div>
    <!-- 상단 정보 End -->

    <!-- input box(s) -->
    <div class="input-box">
      <TodoInput
      type="text"
      placeholder="Please enter text here"/>
      <todo-button>
        <img src="@/assets/images/btn_go.png" alt="">
      </todo-button>
    </div>
    <!-- input box(e) -->

    <TodoSelect/>
    <todo-list>
    </todo-list>
  </base-layout>
</template>

<script>
import BaseLayout from '@/layouts/todo/Index'
import TodoInput from '@/components/TodoInput'
import TodoButton from '@/components/TodoButton'
import TodoSelect from '@/components/TodoSelect'
import TodoList from '@/components/TodoList'

export default {
  name: "Todo",
  components: {
    BaseLayout, TodoInput, TodoButton, TodoSelect, TodoList
  },
  data() {
    return {
      am : 'Good morning!',
      pm : 'Good afternoon!'
    }
  },
  computed: {
    message: function () {
      const now = this.$moment().format('A');
      if (now === '오전') {
        return this.am
      } else {
        return this.pm
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .top {
    padding: 0 1rem;
    color: #fff;
  
    .time-text {
      margin-top: 3rem;
      font-size: 0.8rem;
    }
  
    .tasks-count {
      margin: 3rem 0 2rem;
      font-size: 1rem;
      line-height: 1.5;
    
      span {
        color: rgba(255, 255, 255, 0.5);
        font-size: 2.5rem;
        letter-spacing: 0.3rem;
      
        em {
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }

/* input area */
.input-box {
  position: relative;
  button {
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    margin: auto;
  }
}

</style>