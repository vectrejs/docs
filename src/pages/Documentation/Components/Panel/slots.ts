import { SlotsLists } from '@kitchen/component/Slots';

export const slots: SlotsLists = [
  {
    name: 'Panel',
    slots: {
      header: { description: 'Suitable for titles' },
      nav: { description: 'Navigation section' },
      body: { description: 'Main content' },
      footer: { description: 'Best place for actions' },
    },
  },
  {
    name: 'PanelHeader',
    slots: {
      default: {},
    },
  },
  {
    name: 'PanelNav',
    slots: {
      default: {},
    },
  },
  {
    name: 'PanelBody',
    slots: {
      default: {},
    },
  },
  {
    name: 'PanelFooter',
    slots: {
      default: {},
    },
  },
];
