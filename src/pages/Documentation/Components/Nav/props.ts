import { PropsLists } from '@kitchen/component/Props';

export const props: PropsLists = [
  {
    name: 'Navigation',
    props: {
      items: { type: 'Iterable', description: 'Nav items' },
      level: {
        type: 'Number',
        description: 'Max level of nesting. A negative value makes nesting infinite',
        default: -1,
      },
    },
  },
  {
    name: 'NavigationItem',
    props: {
      active: { type: 'Boolean', description: 'Marks an item as active', default: false },
    },
  },
];
