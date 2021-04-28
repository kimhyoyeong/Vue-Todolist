<template>
  <div class="order-select">
    <select @change="orderByDate($event, $event.target.selectedIndex)">
      <option
          v-for="(item, index) in options"
          :key="`key-${index}`"
          :value="item.type"
          :selected="item.selected"
      >{{ item.option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "TodoSelect",
  props: {
    options: {
      type: Array,
      required: true,
    }
  },
  methods: {
    orderByDate(event, selectedIndex) {
      if (event.target.value === "orderDesc") {
        this.$store.dispatch("Todo/orderByDateDesc", selectedIndex)
      } else if (event.target.value === "orderAsc") {
        this.$store.dispatch("Todo/orderByDateAsc", selectedIndex)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.order-select {
  text-align: right;
  padding: 10px 0;

  select {
    width: 100px;
    padding: 5px;
    border: 1px solid #ddd;
    background: #fff url("~@/assets/images/icon_arrow.svg") calc(100% - 5px) 5px no-repeat;
    background-size: 15px 15px;
    border-radius: 5px;
    font-size: 14px;
  }
}
</style>
