import { EventDefinitions } from '@kitchen/component/Events';

export const events: EventDefinitions = {
  input: {
    description: 'Fires when the slider changed position',
    payload: 'string',
  },
};
