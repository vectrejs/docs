import { EventDefinitions } from '@kitchen/component/Events';

export const events: EventDefinitions = {
  check: {
    description: 'Emits checked item(s). Use turns into a reactive component that does not have an internal state',
    payload: 'string | number | string[] | number[]',
  },
};
