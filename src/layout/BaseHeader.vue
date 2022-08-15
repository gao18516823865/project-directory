<template>
  <div class="header">
    <div class="logo"></div>
    <div class="container">
      <el-button type="primary" size="default" @click="toggleFn">按钮</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";
import { useStore } from "vuex";
import { key } from "@store/index";
export default defineComponent({
  name: "BaseHeader",
  setup() {
    const store = useStore(key);
    const toggleFn = () => {
      store.commit("user/SET_COLLAPSED", !store.state.user!.collapsed);
    };
    console.log(store.state.permission)
    return {
      toggleFn
    }
  }
})
</script>
<style lang="scss" scoped>
.header {
  height: inherit;

  .logo {
    width: $el-slide-width;
    background: #333;
    height: 60px;
    float: left;
  }

  .container {
    float: left;
  }
}
</style>