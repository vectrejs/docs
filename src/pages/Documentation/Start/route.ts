import { RouteConfig } from 'vue-router';

const StartRoute: RouteConfig = {
  name: 'StartPage',
  path: 'getting-started',
  component: () => import(/* webpackChunkName: "start" */ './Start.vue'),
  meta: {
    title: 'Getting Started',
  },
  anchors: {
    Introduction: 'introduction',
    Installation: 'installation',
    Playgrounds: 'playgrounds',
  },
} as RouteConfig;

export { StartRoute };
