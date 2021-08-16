import { RouteRecordRaw } from 'vue-router';

export const ButtonRoute: RouteRecordRaw = {
  name: 'ButtonPage',
  path: 'button',
  component: () => import(/* webpackChunkName: "button" */ './Button.vue'),
  meta: {
    title: 'Buttons',
  },
};
