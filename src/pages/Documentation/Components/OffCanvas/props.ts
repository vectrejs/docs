import { PropsLists } from '@kitchen/component/Props';

export const props: PropsLists = [
  {
    name: 'OffCanvas',
    props: {
      icon: {
        type: 'String',
        description: 'Toggle button icon',
        accepted: 'See <a href="#/pages/elements/icon">Icon</a> element',
        default: 'menu',
      },
      sidebar: {
        type: 'Boolean',
        description: 'Makes the sidebar expanded when the window width is larger than or equal to 960px',
        default: true,
      },
      overlay: {
        type: 'String, Number',
        description: 'Opacity of overlay. Set to 0 to disable overlay.',
        default: 0.1,
      },
      closeOnOverlay: { type: 'Boolean', description: 'Hides the sidebar when clicking on the overlay', default: true },
    },
  },
  {
    name: 'OffCanvasOverlay',
    props: {
      opacity: {
        type: 'String, Number',
        description: 'Opacity of overlay. Set to 0 to disable overlay.',
        default: 0.1,
      },
    },
  },
  {
    name: 'OffCanvasSidebar',
    props: {
      active: {
        type: 'Boolean',
        description: "Makes the sidebar expanded when it's true",
        default: false,
      },
    },
  },
  {
    name: 'OffCanvasToggle',
    props: {
      icon: {
        type: 'String',
        description: 'Toggle button icon',
        default: 'menu',
      },
    },
  },
];
