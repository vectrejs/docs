import { RouteRecordRaw } from 'vue-router';
import { routes as docRoutes } from './Documentation';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "main" */ './Main.vue'),
  },
  {
    path: '/pages',
    component: () => import(/* webpackChunkName: "docs" */ './Docs.vue'),
    children: docRoutes,
    props: { routes: docRoutes, rootPath: '/pages' },
  },
];
