import { PropsLists } from '@kitchen/component/Props';

export const props: PropsLists = [
  {
    name: 'Empty',
    props: {
      title: { type: 'String', description: 'Title' },
      sub: { type: 'String', description: 'Subtitle' },
      icon: { type: 'String', description: 'Icon' },
    },
  },
  {
    name: 'EmptyIcon',
    props: {
      icon: { type: 'String', description: 'Icon' },
    },
  },
];
