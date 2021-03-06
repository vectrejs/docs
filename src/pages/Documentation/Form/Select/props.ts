import { PropsLists } from '@kitchen/component/Props';

export const props: PropsLists = [
  {
    name: 'FormSelect',
    props: {
      options: {
        type: 'Object, String[], Number[]',
        description: 'The list of options. It takes precedence over nested <code>form-option</code> elements',
      },
      value: {
        type: 'String, Number, String[], Number[]',
        description: 'Selected option(s).',
      },
      multiple: {
        type: 'Boolean',
        description: 'Specifies that multiple options can be selected at once',
        default: false,
      },
      placeholder: {
        type: 'String',
        description: 'The first option is served as a hint. It can not be selected and ignored when multiple',
      },
      disabled: {
        type: 'Boolean',
        description: 'Specifies that a drop-down list should be disabled',
        default: false,
      },
      rows: {
        type: 'Number',
        description: 'Represents the number of rows in the list that should be visible at one time.',
      },
      size: {
        type: 'String',
        description: 'Specifies the size of input',
        accepted: 'sm, lg',
      },
      success: {
        type: 'Boolean',
        description: 'Indicates that the selection is valid',
        default: false,
      },
      error: {
        type: 'Boolean',
        description: 'Indicates that there is an error',
        default: false,
      },
    },
  },
  {
    name: 'FormSelectOption',
    props: {
      value: { type: 'String', description: 'the value to be assigned to the v-model' },
      label: { type: 'String', description: 'Specifies a label for an option' },
      disabled: {
        type: 'Boolean',
        description: 'Specifies that an option should be disabled',
        default: false,
      },
      selected: {
        type: 'Boolean',
        description: 'Specifies that an option should be pre-selected when the select loads',
        default: false,
      },
    },
  },
];
