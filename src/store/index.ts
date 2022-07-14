import { createStore, Store} from "vuex";
import { InjectionKey } from "vue";
import user, { ToUser } from './modules/user'
import asyncRouter, { ToAsyncRouter } from './modules/async-router'
export type State = {
  user?:ToUser,
  asyncRouter?:ToAsyncRouter
}
export const key: InjectionKey<Store<State>> = Symbol();
export default createStore({
  state:{},
  mutations:{},
  modules:{user,asyncRouter},
})