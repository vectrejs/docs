import { RouteConfig } from 'vue-router';

export const TileRoute = {
  name: 'TilePage',
  path: 'tile',
  component: () => import(/* webpackChunkName: "tile" */ './Tile.vue'),
  meta: {
    title: 'Tile',
  },
} as RouteConfig;
