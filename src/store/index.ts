import { createStore, Store} from "vuex";
import { InjectionKey } from "vue";
import user, { ToUser } from './modules/user'
import asyncRouter, { ToAsyncRouter } from './modules/async-router'
import permission, { ToPermission } from './modules/permission'
export type State = {
  user?:ToUser,
  asyncRouter?:ToAsyncRouter,
  permission?:ToPermission
}
export const key: InjectionKey<Store<State>> = Symbol();
export default createStore({
  state:{},
  mutations:{},
  modules:{user,asyncRouter,permission},
})