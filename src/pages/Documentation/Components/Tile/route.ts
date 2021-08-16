import { RouteRecordRaw } from 'vue-router';

export const TileRoute: RouteRecordRaw = {
  name: 'TilePage',
  path: 'tile',
  component: () => import(/* webpackChunkName: "tile" */ './Tile.vue'),
  meta: {
    title: 'Tile',
  },
};
