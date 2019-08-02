export default [
  // components
  {
    path: '/component',
    component: '../layouts/index',
    routes: [
      {
        path: '/component', 
        redirect: '/component/introduce'
      },
      { 
        path: '/component/introduce', 
        name: 'introduce',
        title: '介绍',
        // component: './User/Login'
      },
      { 
        path: '/component/button', 
        name: 'button',
        title: 'button按钮',
        // component: './User/Register'
      },
      {
        path: '/component/form',
        name: 'form',
        title: 'form输入',
        routes: [
          { 
            path: '/component/form/input', 
            name: 'input',
            title: 'input',
            // component: './User/Register'
          },
        ]
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      {
        path: '/', 
        redirect: '/home'
      },
      { 
        path: '/home', 
        name: 'home',
        title: '主页',
        // component: './User/Login'
      },
      { 
        path: '/test', 
        name: 'test',
        title: '测试页',
        // component: './User/Login'
      },
      {
        component: '404',
      },
    ]
  }
];
