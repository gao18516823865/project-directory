import { ElNotification } from 'element-plus';
import type {AxiosRequestConfig,AxiosInstance,AxiosResponse} from "axios";
import axios from "axios"
import storage from 'store'
import store from '@/store'
// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: import.meta.env.VITE_BASIC_URL,
  timeout: 60000 // 请求超时时间
})
// 异常拦截处理器
const errorHandler = (error:any) => {
  if (error.response) {
    const data = error.response.data
    // 从 localstorage 获取 token
    // const token = storage.get(ACCESS_TOKEN)
    if (error.response.status === 403) {
      ElNotification({
        title: error.response.status,
        message:data.message,
        type: 'error',
      })
    }
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      ElNotification({
        title:'Unauthorized',
        message:'Authorization verification failed',
        type: 'error',
      })
      // if (token) {
      //   store.dispatch('Logout').then(() => {
      //     setTimeout(() => {
      //       window.location.reload()
      //     }, 1500)
      //   })
      // }
    }
  }
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use((config:any) => {
  const token = storage.get("ACCESS_TOKEN")
  // // 如果 token 存在
  // // 让每个请求携带自定义 token 请根据实际情况自行修改
  config.headers['Platform'] = "miniProgram";
  if (token) {
    // config.headers['Access-Token'] = token
    config.headers['Authorization'] = token
  }
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response:AxiosResponse) => {
  return response.data
}, errorHandler)
export default request

export {
  request as axios
}