import { RouteConfig } from 'vue-router';

export const DropdownMenuRoute = {
  name: 'DropdownMenuPage',
  path: 'dropdown-menu',
  component: () => import(/* webpackChunkName: "dropdown-menu" */ './DropdownMenu.vue'),
  meta: {
    title: 'Dropdown Menu',
  },
} as RouteConfig;
