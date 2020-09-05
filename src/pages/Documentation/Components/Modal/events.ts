import { EventsLists } from '@kitchen/component/Events';

export const events: EventsLists = [
  {
    name: 'Modal',
    events: {
      close: {
        description: 'Emitted when close button or overlay were clicked. Used as v-model event',
        payload: 'false',
      },
    },
  },
  {
    name: 'ModalHeader',
    events: {
      close: {
        description: 'Emitted when close button was clicked',
        payload: 'false',
      },
    },
  },
];
