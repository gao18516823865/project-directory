
import { UserLayout, BaseLayout } from '@/layout';
import { AppRouteRecordRaw } from "./types";
const layoutModule = import.meta.glob("../layout/*.vue");
function loadViewRouteView(view:string){
  return layoutModule[/* @vite-ignore */ `../layout/${view}.vue`]
}
export const businessRouterMap = [{
    path:'/',
    name:'index',
    component: BaseLayout,
    redirect:'dashboard',
    children:[
      {
        path: 'dashboard',
        name: 'dashboard',
        meta:{
          title: '工作看板', icon: 'HomeFilled',
        },
        component: () => import('@/views/dashboard/index.vue'),
      },
      {
        path:'/key',
        name:'key',
        meta:{
          title: '秘钥',
          icon: 'Key',
        },
        component:() => import('@/views/key/key.vue')
      },
      {
        path:'/three',
        name:'three',
        meta:{
          title: '足球',
          icon: 'Baseball',
        },
        component: loadViewRouteView("RouteView"),
        children: [
          {
            path: '/three/one',
            name: 'ones',
            meta:{
              title: '足球',
            },
            component: () => import('@/views/three/three.vue'),
          },
          {
            path: '/three/four',
            name: 'four',
            meta:{
              title: '拍球',
            },
            hidden:true,
            component: () => import('@/views/four/four.vue'),
          }
        ]
      },
  ]
}];
// 基础路由
export const constantRouterMap:Array<AppRouteRecordRaw> = [
  {
    path: "/user",
    component:UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: '/user/login',
        name: 'login',
        component: () => import('@/views/login/login.vue')
      },
      {
        path: '/user/register',
        name: 'register',
        component: () => import('@/views/register/register.vue')
      },
    ]
  },
  {
    path: '/404',
    name:'error',
    component: () => import('@/views/exception/404.vue'),
    meta: { title: '404' }
  }
];
export const RouterArray  = constantRouterMap;