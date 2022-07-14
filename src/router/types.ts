import type { RouteRecordRaw } from 'vue-router';
export type AppRouteRecordRaw = RouteRecordRaw &{
  hidden?:boolean,
}