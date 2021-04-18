<template>
  <div>
    <input type="checkbox"
           :id="_id"
           :value="value"
           :checked="checked"
           @input="change"
    >
    <label :for="_id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "TodoCheckbox",
  model: {
    prop: 'inputValue',
    event: 'input',
  },
  props: {
    id: {
      type: String,
    },
    value: { // checkbox에 들어가는 value
      type: String,
    },
    inputValue: { // v-model과 매칭되는 value
      type: [String, Array, Boolean],
    },
    label: {
      type: String,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    _id: function () {
      return (this.id) ? this.id : 'input-' + this._uid
    },
  },
  methods: {
    change($event) {
      if(this.inputValue instanceof Array) {
        // 다중선택 체크박스인 경우 값을 배열로 반환

        // v-model과 연결된 value(Array)를 checkArr 배열에 할당
        let checkArr = this.inputValue

        // 선택된 체크박스의 값을 checkArr에 push
        if ($event.target.checked) {
          checkArr.push(this.value)
        } else {
          // 선택된 체크박스를 해제한 경우 checkArr에서 현재 체크박스의 값을 삭제
          checkArr.splice(checkArr.indexOf(this.value), 1)
        }
        this.$emit('input', checkArr)
      } else {
        // 다중선택이 아닌경우 true / false 반환
        this.$emit('input', $event.target.checked)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
input {
  display: none;

  &:checked {
    + label {
      &:after {
        background-color: #fc4545;
      }
    }
  }

  + label {
    position: relative;
    display: block;
    padding-left: 35px;
    color: #333;
    text-align: left;

    &:before,
    &:after {
      content: '';
      display: inline-block;
      position: absolute;
      margin: auto;
    }

    &:before {
      left: 2px;
      top: 0;
      width: 19px;
      height: 15px;
      z-index: 1;
    }

    &:after {
      top: 0;
      bottom: 0;
      left: 0;
      width: 24px;
      height: 24px;
      background-color: #e6e6e6;
    }
  }
}
</style>