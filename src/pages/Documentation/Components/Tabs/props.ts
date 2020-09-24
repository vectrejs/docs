import { PropsLists } from '@kitchen/component/Props';

export const props: PropsLists = [
  {
    name: 'Tabs',
    props: {
      current: { type: 'Number, String', description: 'Active tab', default: 0 },
      items: { type: 'String[], Object[], Object<string, Object>', description: 'Tabs', default: '[]' },
      block: { type: 'Bolean', description: 'Full-width tabs', default: false },
    },
  },
  {
    name: 'Tab',
    props: {
      active: { type: 'Boolean', description: 'Highlights a tab', default: false },
      badge: { type: 'String, Number', description: 'Shows the badge in the title of the tab' },
    },
  },
];
