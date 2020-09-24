import { SlotsLists } from '@kitchen/component/Slots';

export const slots: SlotsLists = [
  {
    name: 'Navigation',
    slots: {
      default: { description: 'Used to show "custom" items or composition', scope: '{ item, index, level }' },
    },
  },
  {
    name: 'NavigationItem',
    slots: {
      default: { description: 'Item content' },
    },
  },
];
