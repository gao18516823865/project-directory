import { createRouter, createWebHashHistory } from 'vue-router';
import {RouterArray} from './router.config'
const router = createRouter({
  history: createWebHashHistory(),
  routes:RouterArray
})
export default router;