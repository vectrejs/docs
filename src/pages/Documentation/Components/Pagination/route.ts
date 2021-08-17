import { RouteRecordRaw } from 'vue-router';

export const PaginationRoute: RouteRecordRaw = {
  name: 'PaginationPage',
  path: 'pagination',
  component: () => import(/* webpackChunkName: "pagination" */ './Pagination.vue'),
  meta: {
    title: 'Pagination',
  },
};
