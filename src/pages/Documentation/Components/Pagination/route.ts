import { RouteConfig } from 'vue-router';

export const PaginationRoute = {
  name: 'PaginationPage',
  path: 'pagination',
  component: () => import(/* webpackChunkName: "pagination" */ './Pagination.vue'),
  meta: {
    title: 'Pagination',
  },
} as RouteConfig;
