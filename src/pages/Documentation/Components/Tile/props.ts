import { PropsLists } from '@kitchen/component/Props';

export const props: PropsLists = [
  {
    name: 'Tile',
    props: {
      title: { type: 'String', description: 'Title can contain html tags' },
      subtitle: { type: 'String', description: 'Subtitle can contain html tags' },
      avatar: { type: 'String', description: 'URL of an image' },
      icon: { type: 'String', description: 'All available icons placed insted of avatar' },
      initials: {
        type: 'String',
        description: 'Shown instead of avatar (automatically truncated to 2 characters)',
      },
      compact: { type: 'Boolean', description: 'Show compact tile' },
    },
  },
  {
    name: 'TileIcon',
    props: {
      avatar: { type: 'String', description: 'URL of an image' },
      icon: { type: 'String', description: 'All available icons placed insted of avatar' },
      initials: {
        type: 'String',
        description: 'Shown instead of avatar (automatically truncated to 2 characters)',
      },
    },
  },
  {
    name: 'TileSubtitle',
    props: {
      compact: { type: 'Boolean', description: 'Show compact version' },
    },
  },
];
