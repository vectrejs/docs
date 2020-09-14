import { EventsLists } from '@kitchen/component/Events';

export const events: EventsLists = [
  {
    name: 'OffCanvasToggle',
    events: {
      close: {
        description: 'Emitted when toggle button was clicked',
      },
    },
  },
  {
    name: 'OffCanvasOverlay',
    events: {
      close: {
        description: 'Emitted when the user clicks on the overlay',
        payload: 'false',
      },
    },
  },
];
