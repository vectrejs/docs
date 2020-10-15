import { PropsLists } from '@kitchen/component/Props';

export const props: PropsLists = [
  {
    name: 'Modal',
    props: {
      show: {
        type: 'Boolean',
        description: 'To make a modal appear. Used as v-model prop',
        default: false,
      },
      size: {
        type: 'String',
        description: 'Size of modal. The default size is 640px. Large is 960px and small is 320px',
        accepted: 'lg, sm',
      },
      overlay: {
        type: 'Boolean, String, Number',
        description:
          "Show overlay. Сan take the opacity level as a number (default is <b>75</b>). Don't disable it for large modals.",
        accepted: 'from <b>0</b> to <b>99</b>',
        default: true,
      },
      closeBtn: {
        type: 'Boolean',
        description: 'Show close button',
        default: true,
      },
      closeOverlay: {
        type: 'Boolean',
        description: 'Сlose the modal when clicking on the overlay',
        default: true,
      },
      noScroll: {
        type: 'Boolean',
        description: 'Disable background scrolling when modal opens',
        default: true,
      },
    },
  },
];
