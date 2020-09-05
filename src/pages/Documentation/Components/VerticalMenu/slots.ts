import { SlotsLists } from '@kitchen/component/Slots';

export const slots: SlotsLists = [
  {
    name: 'VerticalMenu',
    slots: {
      default: {
        description:
          'Used to show "custom" items. <b>Scopeless</b> default slot serves to display the static composition as it is',
        scope: '{ item, index }',
      },
    },
  },
  {
    name: 'VerticalMenuItem',
    slots: {
      default: {
        description: 'Content of item',
      },
    },
  },
  {
    name: 'VerticalMenuItemBadge',
    slots: {
      default: {
        description: 'Text of badge',
      },
    },
  },
];
