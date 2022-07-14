import request from "../axios/request.js"
export const api = {
  test:'todos/1',
  GetCommodityListBy: '/api/gzapi/Commodity/GetCommodityListBy',//商品列表
  Login: '/api/id4/login',
  GetSelfShop: '/api/Accounts/GetSelfShop'
}
export function test(params:any){
  return request({
    url: api.test,
    method: 'GET',
    params,
  })
}
export function GetSelfShop(params:any){
  return request({
    url: api.GetSelfShop,
    method: 'GET',
    params,
  })
}
export function GetCommodityListBy(params:any) {
  return request({
    url: api.GetCommodityListBy,
    method: 'post',
    data: params,
  })
}
export function login (parameter:any) {
  return request({
    url: api.Login,
    method: 'post',
    data: parameter
  })
}