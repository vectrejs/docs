import { EventDefinitions } from '@kitchen/component/Events';

export const events: EventDefinitions = {
  change: {
    description: 'Thrown when the current page changes',
    payload: '[current_page]',
  },
};
