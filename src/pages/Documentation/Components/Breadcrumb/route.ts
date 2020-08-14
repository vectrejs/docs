import { RouteConfig } from 'vue-router';

export const BreadcrumbRoute = {
  name: 'BreadcrumbPage',
  path: 'breadcrumb',
  component: () => import(/* webpackChunkName: "breadcrumb" */ './Breadcrumb.vue'),
  meta: {
    title: 'Breadcrumb',
  },
} as RouteConfig;
