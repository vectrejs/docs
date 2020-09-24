import { SlotsLists } from '@kitchen/component/Slots';

export const slots: SlotsLists = [
  {
    name: 'Toast',
    slots: {
      icon: { description: 'Adds the ability to display custom content in the icon section' },
      title: { description: 'Custom title in the body section' },
      content: { description: 'Custom content shown after title in the body section' },
      action: { description: 'Action section' },
      default: { description: 'Used as compositions' },
    },
  },
  {
    name: 'ToastAction',
    slots: {
      default: {},
    },
  },
  {
    name: 'ToastBody',
    slots: {
      default: {},
    },
  },
  {
    name: 'ToastTitle',
    slots: {
      default: {},
    },
  },
  {
    name: 'ToastContent',
    slots: {
      default: {},
    },
  },
  {
    name: 'ToastAction',
    slots: {
      default: {},
    },
  },
];
