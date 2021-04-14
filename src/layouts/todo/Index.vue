<template>
  <div>
    <base-header></base-header>
    <slot></slot>
    <base-footer></base-footer>
  </div>
</template>

<script>
import BaseHeader from '@/layouts/todo/Header'
import BaseFooter from '@/layouts/todo/Footer'

export default {
  name: "Index",
  components: { BaseHeader, BaseFooter}
}
</script>

<style lang="scss" scoped>

</style>