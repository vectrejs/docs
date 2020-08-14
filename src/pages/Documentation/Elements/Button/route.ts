import { RouteConfig } from 'vue-router';

export const ButtonRoute = {
  name: 'ButtonPage',
  path: 'button',
  component: () => import(/* webpackChunkName: "button" */ './Button.vue'),
  meta: {
    title: 'Buttons',
  },
} as RouteConfig;
