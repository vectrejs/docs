import { PropsLists } from '@kitchen/component/Props';

export const props: PropsLists = [
  {
    name: 'VerticalMenu',
    props: {
      items: { type: 'Iterable', description: 'Menu items', required: true },
      active: { type: 'String, Number', description: 'Key or index of active item' },
    },
  },
  {
    name: 'VerticalMenuItem',
    props: {
      active: { type: 'Boolean', description: 'Marks an included link as active', default: false },
      badge: { type: 'String, Number', description: 'Additional badge placed opposite item' },
      text: { type: 'String', description: 'Text of item' },
      path: { type: 'String', description: 'Path of the link' },
    },
  },
  {
    name: 'VerticalMenuItemBadge',
    props: {
      type: { type: 'String', description: 'Type of badge', accepted: 'primary, secondary, warning, success, error' },
    },
  },
  {
    name: 'VerticalMenuDivider',
    props: {
      text: { type: 'String', description: 'Specifies the text of divider' },
    },
  },
];
