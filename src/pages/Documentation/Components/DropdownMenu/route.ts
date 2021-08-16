import { RouteRecordRaw } from 'vue-router';

export const DropdownMenuRoute: RouteRecordRaw = {
  name: 'DropdownMenuPage',
  path: 'dropdown-menu',
  component: () => import(/* webpackChunkName: "dropdown-menu" */ './DropdownMenu.vue'),
  meta: {
    title: 'Dropdown Menu',
  },
};
