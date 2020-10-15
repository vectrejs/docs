import { RouteConfig } from 'vue-router';

export const route = {
  name: 'ClickOutsidePage',
  path: 'click-outside',
  component: () => import(/* webpackChunkName: "click-outside" */ './ClickOutside.vue'),
  meta: {
    title: 'Click Outside',
  },
} as RouteConfig;
