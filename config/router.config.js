export default [
  // components
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      {
        path: '/',
        redirect: '/introduce',
      },
      {
        path: '/introduce',
        name: 'introduce',
        title: '介绍',
        component: './Introduce',
      },
      {
        path: '/button',
        name: 'button',
        title: 'button按钮',
        component: './Button',
      },
      {
        path: '/form',
        name: 'form',
        title: 'form输入',
        routes: [
          {
            path: '/form/index',
            name: 'index',
            title: 'form',
            component: './Form',
          },
          {
            path: '/form/input-number',
            name: 'input',
            title: 'input',
            component: './Form/InputNumber',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
