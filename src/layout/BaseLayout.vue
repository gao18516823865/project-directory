<script lang="ts" setup>
import { Ref, ref } from "vue"
import SubMenu from '@components/SubMenu/SubMenu.vue'
import MenuItem from '@components/MenuItem/MenuItem.vue'
import { businessRouterMap } from '@router/router.config'
import { useStore } from 'vuex'
import { key } from '@store/index'
const store = useStore(key)
const defaultActive = ref(store.state.user?.defaultActive) as Ref<string>
const roles = ref(businessRouterMap[0].children)
console.log(roles,'---roles')
</script>
<template>
  <el-container class="common-layout">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <!-- 必须加el-menu 标签 因为 要做一些菜单操作 不要问 问就是elemen-ui 官网有  -->
        <el-menu :router="true" :default-active="defaultActive">
          <template v-for="item in roles">
            <!-- 如果有children 执行 -->
            <sub-menu v-if="item.children" :item="item" :key="item.path"></sub-menu>
            <!-- 没有的话就吧当前菜单的数据添加到 页面 -->
            <menu-item v-else :item="item" :key="item.name"> </menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" v-if="$route.meta.keepAlive" />
          </keep-alive>
          <component :is="Component" v-if="!$route.meta.keepAlive" />
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss" scoped>
.el-menu {
  border: 0;
}
.common-layout {
  height: 100%;
  margin: 0;
  padding: 0%;
}
</style>