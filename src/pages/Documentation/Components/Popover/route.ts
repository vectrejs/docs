import { RouteRecordRaw } from 'vue-router';

export const PopoverRoute: RouteRecordRaw = {
  name: 'PopoverPage',
  path: 'popover',
  component: () => import(/* webpackChunkName: "popover" */ './Popover.vue'),
  meta: {
    title: 'Popovers',
  },
};
