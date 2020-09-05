import { PropsLists } from '@kitchen/component/Props';

export const props: PropsLists = [
  {
    name: 'Steps',
    props: {
      active: { type: 'Number', description: 'Current step', default: 1 },
      items: { type: 'Object[], Object<string, Object>', description: 'Steps', default: '[]' },
    },
  },
  {
    name: 'Step',
    props: {
      active: { type: 'Number', description: 'Current step', default: 1 },
      tooltip: { type: 'String', description: 'Displayed on hover' },
    },
  },
];
