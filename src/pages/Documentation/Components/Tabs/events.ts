import { EventsLists } from '@kitchen/component/Events';

export const events: EventsLists = [
  {
    name: 'Tabs',
    events: {
      change: {
        description: 'Thrown when the current tab changes',
        payload: '[current_tab]',
      },
    },
  },
];
