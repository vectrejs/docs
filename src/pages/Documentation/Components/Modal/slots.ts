import { SlotsLists } from '@kitchen/component/Slots';

export const slots: SlotsLists = [
  {
    name: 'Modal',
    slots: {
      header: { description: 'Modal window title' },
      body: { description: 'Main content of the modal window' },
      footer: { description: 'Modal window footer. Usually used to place actions' },
    },
  },
  {
    name: 'ModalHeader',
    slots: {
      default: { description: 'Modal window title' },
    },
  },
  {
    name: 'ModalBody',
    slots: {
      default: { description: 'Main content of the modal window' },
    },
  },
  {
    name: 'ModalFooter',
    slots: {
      default: { description: 'Modal window footer. Usually used to place actions' },
    },
  },
];
