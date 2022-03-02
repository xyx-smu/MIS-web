import { Menu } from './type';

export const MenuNav: Menu[] = [
  {
    title: '首页',
    icon: 'dashboard',
    path: './layout/dashboard',
    open: false,
    selected: false,
    children: [
      {
        title: '页面1',
        icon: 'dashboard',
        path: '/layout/dashboard/page1',
        open: false,
        selected: false,
      },
      {
        title: '页面2',
        icon: 'dashboard',
        path: '/layout/dashboard/page2',
        open: false,
        selected: false,
      },
      {
        title: '页面3',
        icon: 'dashboard',
        path: '/layout/dashboard/page3',
        open: false,
        selected: false,
      },
    ],
  },
];
