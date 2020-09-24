import { RouteConfig } from 'vue-router';

export const AvatarRoute = {
  name: 'AvatarPage',
  path: 'avatar',
  component: () => import(/* webpackChunkName: 'avatar' */ './Avatar.vue'),
  meta: {
    title: 'Avatar',
  },
} as RouteConfig;
