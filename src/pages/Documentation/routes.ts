import { RouteRecordRaw } from 'vue-router';
// import Parent from '@kitchen/component/Parent.vue';
// import { LayoutRoute } from './Layout';
// import { routes as elementRoutes } from './Elements';
// import { routes as componentRoutes } from './Components';
// import { routes as formRoutes } from './Form';
// import { routes as utilRoutes } from './Utilities';
import { StartRoute } from './Start';

const routes: RouteRecordRaw[] = [
  { ...StartRoute, alias: '/' },
  // {
  //   path: 'elements',
  //   component: Parent,
  //   meta: {
  //     title: 'Elements',
  //   },
  //   children: Object.values(elementRoutes),
  // },
  // LayoutRoute,
  // {
  //   path: 'form',
  //   component: Parent,
  //   meta: {
  //     title: 'Form',
  //   },
  //   children: Object.values(formRoutes),
  // },
  // {
  //   path: 'components',
  //   component: Parent,
  //   meta: {
  //     title: 'Components',
  //   },
  //   children: Object.values(componentRoutes),
  // },
  // {
  //   path: 'utils',
  //   component: Parent,
  //   meta: {
  //     title: 'Utilities',
  //   },
  //   children: Object.values(utilRoutes),
  // },
];

export default routes;
