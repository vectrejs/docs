import { SlotsLists } from '@kitchen/component/Slots';

export const slots: SlotsLists = [
  {
    name: 'OffCanvas',
    slots: {
      icon: { description: 'Allows you to replace the standard button with something custom' },
      sidebar: { description: 'Sidebar content' },
      content: { description: 'The main content of a page. Usually <code>&lt;router-view/&gt;</code> is placed here' },
      default: { description: 'Used as compositions' },
    },
  },
  {
    name: 'OffCanvasContent',
    slots: {
      default: {},
    },
  },
  {
    name: 'OffCanvasOverlay',
    slots: {
      default: {},
    },
  },
  {
    name: 'OffCanvasSidebar',
    slots: {
      default: {},
    },
  },
  {
    name: 'OffCanvasToggle',
    slots: {
      default: {},
    },
  },
];
