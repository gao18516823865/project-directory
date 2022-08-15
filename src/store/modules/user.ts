import storage from 'store';
import { Module } from "vuex";
import { ACCESS_TOKEN } from '../mutation-types';
import { State } from ".."
const initialState = {
  token:'',
  defaultActive:'',
  collapsed:false,
}
export type ToUser = typeof initialState
export default {
  namespaced:true,
  state:{
    ...initialState
  },
  mutations:{
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_DEFAULT_ACTIVE: (state, defaultActive) => {
      state.defaultActive = defaultActive
    },
    SET_COLLAPSED: (state, collapsed) => {
      state.collapsed = collapsed
    }
  },
  actions:{
    // 登陆
    Login ({ commit }, userInfo) {
      const token = '6666'
      return new Promise((resolve, reject) => {
        storage.set(ACCESS_TOKEN, token)
        commit('SET_TOKEN', token)
        resolve({})
      }).catch(error => {
        console.error(error)
      })
    }
  }
} as Module<ToUser,State>