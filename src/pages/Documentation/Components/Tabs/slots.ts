import { SlotsLists } from '@kitchen/component/Slots';

export const slots: SlotsLists = [
  {
    name: 'Tabs',
    slots: {
      tab: { description: 'To customize the default template of tab', scope: '{ item, index }' },
      action: { description: 'Action section' },
      default: { description: 'Used as composition (<code>items</code> prop is ignored)' },
    },
  },
];
