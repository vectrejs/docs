import { PropsLists } from '@kitchen/component/Props';

export const props: PropsLists = [
  {
    name: 'FormGroup',
    props: {
      disabled: { description: 'Makes all nested form components disabled', type: 'Boolean' },
      error: { description: 'Shows the current group as invalid', type: 'Boolean' },
      success: { description: 'Shows the current group as success', type: 'Boolean' },
      size: {
        description: 'Sets the size of nested components',
        type: 'String',
        accepted: 'sm, lg',
      },
    },
  },
  {
    name: 'FormLabel',
    props: {
      size: { type: 'String', description: 'Specifies the size of label', accepted: 'sm, lg' },
    },
  },
  {
    name: 'FormHint',
    props: {
      success: {
        type: 'Boolean',
        description: 'Shown only when the group is marked as a success',
      },
      error: {
        type: 'Boolean',
        description: 'Shown only when the group is marked as an error',
      },
    },
  },
];
