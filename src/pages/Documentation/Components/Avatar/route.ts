import { RouteRecordRaw } from 'vue-router';

export const AvatarRoute: RouteRecordRaw = {
  name: 'AvatarPage',
  path: 'avatar',
  component: () => import(/* webpackChunkName: 'avatar' */ './Avatar.vue'),
  meta: {
    title: 'Avatar',
  },
};
