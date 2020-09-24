import { SlotsLists } from '@kitchen/component/Slots';

export const slots: SlotsLists = [
  {
    name: 'FormCheckbox',
    slots: {
      default: { description: 'Shown as a label' },
    },
  },
  {
    name: 'FormCheckboxGroup',
    slots: {
      default: { description: 'Only nested <code>form-checkbox</code> elements will be included' },
    },
  },
];
