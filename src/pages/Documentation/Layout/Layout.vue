<template>
  <component-view>
    <flexbox-grid id="flex" />
    <responsive id="responsive" />
  </component-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FlexboxGrid from './Flexbox.vue';
import Responsive from './Responsive.vue';
import { props } from './props';

export default defineComponent({
  name: 'LayoutPage',
  components: {
    FlexboxGrid,
    Responsive,
  },
  data: () => ({
    props,
  }),
});
</script>

<style lang="scss" scoped>
/deep/ .block {
  padding: 0.4rem;

  &.bg-gray {
    background: #f0f1f4;
  }
}

@media (max-width: 600px) {
  /deep/ .block {
    padding: 0.4rem 0.1rem;
  }
}
</style>
