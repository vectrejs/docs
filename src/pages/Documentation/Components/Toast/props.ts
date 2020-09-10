import { PropsLists } from '@kitchen/component/Props';

export const props: PropsLists = [
  {
    name: 'Toast',
    props: {
      title: { type: 'String', description: 'Title can contain html tags' },
      content: { type: 'String', description: 'Content can contain html tags' },
      icon: { type: 'String', description: 'Toast icon. Automatically increases when title and content are set' },
      type: { type: 'String', description: 'Color scheme', accepted: 'primary, success, warning, error' },
      autoclose: { type: 'String, Number', description: 'Duration in ms after which the toast will disappear' },
      closeable: {
        type: 'Boolean',
        description: 'Set true to show close button',
        default: false,
      },
    },
  },
  {
    name: 'ToastIcon',
    props: {
      icon: { type: 'String', description: 'The name of icon' },
      large: { type: 'Boolean', description: 'Doubles the size of the icon', default: false },
    },
  },
];
