import { SlotDefinitions } from '@kitchen/component/Slots';

export const slots: SlotDefinitions = {
  header: { scope: '{ header, item }' },
  body: { scope: '{ header, item }' },
  default: { scope: '{ header, item }' },
};
