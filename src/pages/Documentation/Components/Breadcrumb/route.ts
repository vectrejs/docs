import { RouteRecordRaw } from 'vue-router';

export const BreadcrumbRoute: RouteRecordRaw = {
  name: 'BreadcrumbPage',
  path: 'breadcrumb',
  component: () => import(/* webpackChunkName: "breadcrumb" */ './Breadcrumb.vue'),
  meta: {
    title: 'Breadcrumb',
  },
};
