import { RouteRecordRaw } from 'vue-router';

export const route: RouteRecordRaw = {
  name: 'TagPage',
  path: 'tag',
  component: () => import(/* webpackChunkName: "tag" */ './Tag.vue'),
  meta: {
    title: 'Tags',
  },
};
