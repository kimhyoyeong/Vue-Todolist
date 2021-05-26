<template>
  <transition>
    <div class="spinner" v-if="isShow">
      스피너
    </div>
  </transition>
</template>

<script>
export default {
  name: "Spinner.vue",
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>

</style>