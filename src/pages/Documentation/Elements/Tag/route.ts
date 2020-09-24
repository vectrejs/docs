import { RouteConfig } from 'vue-router';

export const route = {
  name: 'TagPage',
  path: 'tag',
  component: () => import(/* webpackChunkName: "tag" */ './Tag.vue'),
  meta: {
    title: 'Tags',
  },
} as RouteConfig;
