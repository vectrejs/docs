import { SlotsLists } from '@kitchen/component/Slots';

export const slots: SlotsLists = [
  {
    name: 'FormSelect',
    slots: {
      default: {
        description:
          'Includes only nested <code>form-option</code> elements. Ignored if <code>options</code> prop is set',
      },
    },
  },
  {
    name: 'FormSelectOption',
    slots: {
      default: { description: 'Serves as a label' },
    },
  },
];
