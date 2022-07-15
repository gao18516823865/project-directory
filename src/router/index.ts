import { createRouter, createWebHashHistory } from 'vue-router';
import NProgress from 'nprogress' 
import {RouterArray} from './router.config'
import store from '@store/index'
import storage from "store"
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { DefineComponent } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { AppRouteRecordRaw } from './types';
const modules = import.meta.glob("../views/**/*.vue")
const layoutModule = import.meta.glob("../layout/*.vue")
import { toRaw } from "vue"
// const modules = import.meta.globEager('../views/**/*.vue'); 需要.default
const router = createRouter({
  history: createWebHashHistory(),
  routes:RouterArray
})
NProgress.configure({ showSpinner: false })
const loginRoutePath:string = "/user/login"
const defaultRoutePath:string = "/dashboard"
const allowList:Array<string> = ['login', 'register', 'registerResult']; // 允许匿名登录的路由列表
let hasRoutes:boolean = true
router.beforeEach((to, from, next) => {
  NProgress.start()
  const curPath=to.path;
  if(storage.get(ACCESS_TOKEN)){
    // 已经登录 不需要跳转到登录页面
    store.commit('user/SET_DEFAULT_ACTIVE',curPath)
    if(to.path === loginRoutePath){
      next({ path: defaultRoutePath })
      NProgress.done()
    }else{
      if(hasRoutes) {
        store.dispatch("asyncRouter/GenerateRoutes").then(() => {
          const addRouters = toRaw(store.state.asyncRouter!.addRouters)
          console.log(addRouters,'addRouters')
          handleRoute(filterRoute(addRouters))
          // console.log(JSON.stringify(router.options.routes[0], null, 4),'----router',router.options.routes[0])
          // console.log(router.options.routes[0],'-----40')
        //   // 合并路由
        }).catch(() => {})
        hasRoutes = false
        return next({...to,replace:true})
      }
      console.log(router.options.routes[0],'----40')
      next()
    }
  }else{
    if (allowList.includes(to.name as string)) {
      // 在免登录名单，直接进入
      next()
    } else {
      next({ path: loginRoutePath})
      NProgress.done()
    }
  }
})
router.afterEach(() => {
  NProgress.done()
})
type routeType =  RouteRecordRaw & {
  component: string | DefineComponent;
  children?: routeType[];
}
function loadView(view:string){
  return modules[/* @vite-ignore */ `../views/${view}.vue`]
}
function loadViewRouteView(view:string){
  return layoutModule[/* @vite-ignore */ `../layout/${view}.vue`]
}
function handleRoute(routes: routeType[]){
  const routesArray = router.options.routes[0].children! as Array<AppRouteRecordRaw>
  console.log(routes,'-routes')
  routes.forEach((item)=>{
    routesArray.push(item)
    router.addRoute(item)
  })
  routesArray.push({
    path: '/*:pathMatch(.*)',
    redirect: '/404',
  })
}
function filterRoute(router:routeType[]):routeType[]{
  return router.map(item=> {
    if(item.children && item.children.length>0){
      filterRoute(item.children)
    }
    if(item.component === 'RouteView'){
      item.component = loadViewRouteView(item.component as string) as unknown as DefineComponent
    }else if(item.component && item.component.includes('/')){
      item.component = loadView(item.component as string) as unknown as DefineComponent
    }
    return item
  })
}
export default router;