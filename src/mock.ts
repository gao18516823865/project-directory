export const fn1 = [
  {
    path:"/ob",
    name:"ob",
    meta:{
      title: "Ranks",
      icon: "Baseball",
    },
    component: "RouteView",
    children: [
      {
        path: "/ob/obOne",
        name: "obOne",
        meta:{
          title: "足球obOne",
          index:4,
        },
        component: "ob/one",
      },
      {
        path: "/ob/obTwo",
        name: "obTwo",
        meta:{
          title: "拍球",
          index:5,
        },
        hidden:true,
        component: "ob/two",
      }
    ]
  },{
    path:"/ms",
    name:"ms",
    meta:{
      title: "Ms",
      icon: "Baseball",
    },
    component: "ms/ms",
  }
]