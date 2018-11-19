import { PropDefinitions } from '@kitchen/component/Props';

export const props: PropDefinitions = {
  items: { required: true, type: 'Any[]', description: 'shown items' },
  checked: { type: 'Number[], String[], Number, String' },
  name: {
    type: 'String',
    description: 'used as id, randomly generated by default',
  },
  multiple: {
    type: 'Boolean',
    description: 'show multiple items at once',
    default: false,
  },
  icon: { type: 'String' },
};
