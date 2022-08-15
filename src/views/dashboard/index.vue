<template>
  <div>
    dashboard
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Dashboard",
  setup() {
    console.time();
    setTimeout(() => {
    console.log(124)
    console.timeEnd();
      
    }, 2000);
    setTimeout(() => {
        console.log(124,'----')
      }, 3000);
  }
})
</script>