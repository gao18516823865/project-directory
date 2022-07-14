<template>
  <!-- 判断index 后面会用 -->
  <!-- <router-link :to="item.path"> -->
    <el-sub-menu :index="item.path">
      <!-- 相当于一个item的功能 -->
      <template #title>
        <el-icon v-if="item.meta && item.meta.icon">
          <component :is="item.meta.icon" />
        </el-icon>
        <span>{{ item.meta && item.meta.title }}</span>
      </template>
      <!-- 循环 -->
      <div v-for="items in item.children" :key="items.path">
        <!-- 判断是否有children  -->
        <!-- 如果有children 就自身条用自身 :item 是父子传值 如果不懂可以看vue.js 父子组件传值 -->
        <sub-menu v-if="items.children" :index="items.path" :item="items"></sub-menu>
        <!-- 如果没有 children   menu-item是自定义的组件-->
        <menu-item v-else :item='items' :key="item.name"></menu-item>
      </div>
    </el-sub-menu>
  <!-- </router-link> -->
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import MenuItem from '@components/MenuItem/MenuItem.vue';
export default defineComponent({
  name: "sub-menu",
  components: {
    MenuItem,
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    }
  },
  setup() {
    return {

    }
  }
})
</script>
<style>
</style>