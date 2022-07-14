<template>
  <div>
    three
  </div>
  <el-button type="primary" size="default" @click="go">按钮</el-button>
  
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { useRouter } from "vue-router"
export default defineComponent({
  name: 'one',
  setup() {
    // 跳转路由到/three/four
    const router = useRouter()
    const go = () => (router.push('/three/four'),console.log(124))
    return {
      go
    }
  }
})
</script>