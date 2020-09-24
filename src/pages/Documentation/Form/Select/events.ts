import { EventsLists } from '@kitchen/component/Events';

export const events: EventsLists = [
  {
    name: 'FormSelect',
    events: {
      input: {
        description: 'Fires after an option has been selected',
        payload: 'string, string[], number',
      },
    },
  },
];
