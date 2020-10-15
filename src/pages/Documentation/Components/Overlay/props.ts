import { PropDefinitions } from '@kitchen/component/Props';

export const props: PropDefinitions = {
  show: {
    type: 'Boolean',
    description: 'To make a overlay appear',
    default: false,
  },
  opacity: {
    type: 'String, Number',
    description: 'The opacity level',
    accepted: 'from <b>0</b> to <b>99</b>',
    default: 75,
  },
  blur: {
    type: 'String, Number',
    description: 'The blur level',
    accepted: 'any number without "px" at the end',
    default: 0,
  },
  zIndex: {
    type: 'String, Number',
    description: 'The stack order of overlay',
    default: 1,
  },
  fullscreen: {
    type: 'Boolean',
    description: 'Makes a full screen overlay',
    default: false,
  },
  noScroll: {
    type: 'Boolean',
    description: 'Disable background scrolling when overlay is shown. Only available for full screen overlay',
    default: false,
  },
};
