import { RouteConfig } from 'vue-router';

export const route = {
  name: 'TextareaPage',
  path: 'textarea',
  component: () => import(/* webpackChunkName: "textarea" */ './Textarea.vue'),
  meta: {
    title: 'Textarea',
  },
} as RouteConfig;
