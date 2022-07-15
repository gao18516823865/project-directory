export const fn1 = [
  {
    path:"/calendar",
    name:"calendar",
    meta:{
      title: "日历",
      icon: "Calendar",
    },
    component: "RouteView",
    children: [
      {
        path: "/calendar/box",
        name: "box",
        meta:{
          title: "盒子",
          index:4,
        },
        component: "calendar/box",
      },
      {
        path: "/calendar/CameraFilled",
        name: "cameraFilled",
        meta:{
          title: "相机",
          index:5,
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
    },
    component: "deleteFilled/deleteFilled",
  }
]