import { RouteConfig } from 'vue-router';

export const PopoverRoute = {
  name: 'PopoverPage',
  path: 'popover',
  component: () => import(/* webpackChunkName: "popover" */ './Popover.vue'),
  meta: {
    title: 'Popovers',
  },
} as RouteConfig;
