import { SlotsLists } from '@kitchen/component/Slots';

export const slots: SlotsLists = [
  {
    name: 'Tile',
    slots: {
      content: { description: 'Custom content shown after subtitle in the content section' },
      actions: { description: 'Actions section' },
      icon: { description: 'Adds the ability to display content in the icon section' },
      default: { description: 'Used as compositions' },
    },
  },
  {
    name: 'TileAction',
    slots: {
      default: {},
    },
  },
  {
    name: 'TileContent',
    slots: {
      default: {},
    },
  },
  {
    name: 'TileIcon',
    slots: {
      default: {},
    },
  },
  {
    name: 'TileSubtitle',
    slots: {
      default: {},
    },
  },
  {
    name: 'TileTitle',
    slots: {
      default: {},
    },
  },
];
