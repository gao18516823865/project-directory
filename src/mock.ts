export const fn1 = [
  {
    path:"/calendar",
    name:"calendar",
    meta:{
      title: "日历",
      icon: "Calendar",
      permission: ["calendar"]
    },
    component: "RouteView",
    children: [
      {
        path: "/calendar/box",
        name: "box",
        meta:{
          title: "盒子",
          index:4,
          permission: ["box"]
        },
        component: "calendar/box",
      },
      {
        path: "/calendar/CameraFilled",
        name: "cameraFilled",
        meta:{
          title: "相机",
          index:5,
          permission: ["cameraFilled"]
        },
        hidden:true,
        component: "calendar/cameraFilled",
      }
    ]
  },{
    path:"/deleteFilled",
    name:"deleteFilled",
    meta:{
      title: "垃圾桶",
      icon: "DeleteFilled",
      permission: ["deleteFilled"]
    },
    component: "deleteFilled/deleteFilled",
  }
]