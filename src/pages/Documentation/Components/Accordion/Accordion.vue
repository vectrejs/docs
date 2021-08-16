<template>
  <component-view>
    <h2 class="title">Accordion</h2>
    <p>Accordions are used to toggle sections of content.</p>

    <basic />
    <multiple />
    <checked />
    <reactive />
  </component-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Basic from './Basic.vue';
import Checked from './Checked.vue';
import Multiple from './Multiple.vue';
import Reactive from './Reactive.vue';

import { props } from './props';
import { slots } from './slots';
import { events } from './events';

export default defineComponent({
  name: 'AccordionPage',
  components: {
    Basic,
    Checked,
    Reactive,
    Multiple,
  },
  data: () => ({
    events,
    slots,
    props,
  }),
});
</script>

<style lang="scss" scoped>
/deep/ .accordion {
  &-header {
    font-size: large;
    font-weight: 600;

    .icon {
      margin-right: 0.2rem;
    }
  }

  &-body {
    margin-left: 0.4rem;
    margin-bottom: 0.5rem;
  }
}
</style>
