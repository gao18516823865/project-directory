<template>
    <el-menu-item :index="item.path" v-if="!item.hidden">
      <template #title>
        <el-icon v-if="item.meta && item.meta.icon">
          <component :is="item.meta.icon" />
        </el-icon>
        <span>{{ item.meta && item.meta.title }}</span>
      </template>
    </el-menu-item>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  // props 接收来自父组件传下来的值 父组件 传值的值 == 子组件的值
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
})
</script>
<style lang="scss">
</style>