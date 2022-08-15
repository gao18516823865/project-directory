let arrSign:string[] = [];
type FilterSignType = {
  meta?:{permission?:string},
  children?:any[]
}
export const filterSign = (item:any):string[] => {
  item.map((item:FilterSignType) => {
    if(item.meta && item.meta.permission){
      let permission:string = item.meta.permission
      arrSign.push(...permission)
    }
    if(item.children && item.children.length>0){
      filterSign(item.children)
    }
  })
  return arrSign
}