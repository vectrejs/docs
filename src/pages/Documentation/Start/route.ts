import { RouteConfig } from 'vue-router';
import Start from './Start.vue';

const StartRoute = {
  path: 'getting-started',
  title: 'Getting Started',
  component: Start,
} as RouteConfig;

export {
  StartRoute,
};
