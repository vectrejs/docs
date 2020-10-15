import { PropDefinitions } from '@kitchen/component/Props';

export const props: PropDefinitions = {
  value: {
    type: 'String, Number',
    description: 'Current value',
  },
  min: {
    type: 'String, Number',
    description: 'The minimum permitted value',
    default: 0,
  },
  max: {
    type: 'String, Number',
    description: 'The maximum permitted value',
    default: 100,
  },
  step: {
    type: 'String, Number',
    description: 'The stepping interval, used both for user interface and validation purposes',
    default: 1,
  },
  disabled: {
    type: 'Boolean',
    description: 'Specifies a tooltip',
    default: false,
  },
  tooltip: {
    type: 'Boolean, String, Function',
    description: 'Specifies the size of input',
    default: false,
  },
};
