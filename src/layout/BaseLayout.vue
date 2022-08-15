<script lang="ts" setup>
import { ref, watch } from "vue"
import SubMenu from '@components/SubMenu/SubMenu.vue'
import MenuItem from '@components/MenuItem/MenuItem.vue'
import BaseHeader from './BaseHeader.vue'
import { useStore } from 'vuex'
import { key } from '@store/index'
import { AppRouteRecordRaw } from "@/router/types"
const store = useStore(key)
const defaultActive = ref<string>(store.state.user!.defaultActive);
const roles = ref<AppRouteRecordRaw[]>(store.state.asyncRouter!.allRoutes);
// watch 监听store.state.user.collapsed 改变

const collapsed = ref<boolean>();
watch(() => store.state.user!.collapsed, () => {
  collapsed.value = store.state.user!.collapsed;
})
</script>
<template>
  <el-container class="common-layout">
    <el-header><BaseHeader/></el-header>
    <el-container>
      <el-aside :width="collapsed? '64px': '200px'">
        <!-- 必须加el-menu 标签 因为 要做一些菜单操作 不要问 问就是elemen-ui 官网有  -->
        <el-menu :router="true" :default-active="defaultActive" :collapse="collapsed" :width="collapsed? '64px': '200px'">
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
/* 加过渡给侧边导航*/
.el-aside {
  transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -moz-transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -o-transition: width 0.25s;
}
/*加快侧边栏文字消失的速度*/
.el-menu {
  transition: all 10ms;
}

</style>