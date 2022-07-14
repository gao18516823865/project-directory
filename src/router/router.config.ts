
import { UserLayout, BaseLayout, RouteView } from '@/layout';
import { AppRouteRecordRaw } from "./types";
const layoutModule = import.meta.glob("../layout/*.vue");
function loadViewRouteView(view:string){
  return layoutModule[/* @vite-ignore */ `../layout/${view}.vue`]
}
export const businessRouterMap = [{
    path:'/',
    name:'index',
    component: BaseLayout,
    children:[
      {
        path: '/dashboard',
        name: 'dashboard',
        meta:{
          title: '工作看板', icon: 'HomeFilled',
        },
        component: () => import('@/views/dashboard/index.vue'),
      },
      {
        path:'/one',
        name:'one',
        meta:{
          title: '电话',
          icon: 'PhoneFilled',
        },
        component:() => import('@/views/one/one.vue')
      },
      {
        path:'/two',
        name:'two',
        meta:{
          title: '秘钥',
          icon: 'Key',
        },
        component:() => import('@/views/two/two.vue')
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
      // {
      //   path:"/ob",
      //   name:"ob",
      //   meta:{
      //     title: "Ranks",
      //     icon: "Baseball",
      //   },
      //   component: RouteView,
      //   children: [
      //     {
      //       path: "/ob/obOne",
      //       name: "obOne",
      //       meta:{
      //         title: "足球",
      //         index:4,
      //       },
      //       component: import('@/views/ob/one.vue'),
      //     },
      //     {
      //       path: "/ob/obTwo",
      //       name: "obTwo",
      //       meta:{
      //         title: "拍球",
      //         index:5,
      //       },
      //       hidden:true,
      //       component: import("@views/ob/two.vue"),
      //     }
      //   ]
      // }
      // ,{
      //   path:"/ms",
      //   name:"ms",
      //   meta:{
      //     title: "Ms",
      //     icon: "Baseball",
      //   },
      //   component: import("@views/ms/ms.vue"),
      // }
  ]
}];
// 基础路由
export const constantRouterMap:Array<AppRouteRecordRaw> = [
  ...businessRouterMap,
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
    path: '/:pathMatch(.*)',
    name: 'error',
    component: () => import('@/views/exception/404.vue'),
    meta: { title: '404' },
  },
];
export const RouterArray  = constantRouterMap;