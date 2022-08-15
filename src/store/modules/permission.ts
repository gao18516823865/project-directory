
import { Module } from "vuex";
import { filterSign } from "@/utils/tool";
import { State } from ".."
const initialState = {
  permissions: ['']
}
export type ToPermission = typeof initialState
export default {
  namespaced: true,
  state: {
    ...initialState
  },
  mutations: {
    SET_SIGN: (state, payload) => {
      console.log(filterSign(payload[0].children))
      state.permissions = filterSign(payload[0].children)
    }
  },
  actions: {
  }
} as Module<ToPermission, State>