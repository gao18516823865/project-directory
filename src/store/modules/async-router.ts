import { Module } from "vuex"
import { State } from ".."
import { businessRouterMap } from "@/router/router.config"
import { fn1 } from '@/mock'
const initialState = {
  routers: businessRouterMap,
  addRouters: [],
}
export type ToAsyncRouter = typeof initialState
export default {
  namespaced: true,
  state: {
    ...initialState,
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise<void>(resolve => {
        const accessedRouters = fn1
        commit("SET_ROUTERS", accessedRouters)
        resolve()
      })
    }
  },
} as Module<ToAsyncRouter, State>