export default [
  // components
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      {
        path: '/', 
        redirect: '/introduce'
      },
      { 
        path: '/introduce', 
        name: 'introduce',
        title: '介绍',
        // component: './User/Login'
      },
      { 
        path: '/button', 
        name: 'button',
        title: 'button按钮',
        // component: './User/Register'
      },
      {
        path: '/form',
        name: 'form',
        title: 'form输入',
        routes: [
          { 
            path: '/form/input', 
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
];
