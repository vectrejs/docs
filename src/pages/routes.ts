import { RouteConfig } from 'vue-router';
import Main from './Main.vue';
import Docs from './Docs.vue';
import { routes as docRoutes } from './Documentation';

export const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/pages',
    component: Docs,
    children: docRoutes,
    props: { routes: docRoutes, rootPath: '/pages/' },
  },
];
