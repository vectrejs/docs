import { RouteConfig } from 'vue-router';

export const AccordionRoute = {
  name: 'AccordionPage',
  path: 'accordion',
  component: () => import(/* webpackChunkName: "accordion" */ './Accordion.vue'),
  meta: {
    title: 'Accordion',
  },
} as RouteConfig;
