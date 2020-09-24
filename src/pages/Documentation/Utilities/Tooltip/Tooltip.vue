<template>
  <component-view>
    <h2 class="title">Tooltip</h2>
    <p>
      A tooltip is used to specify extra information about something
      when the user moves the mouse pointer over an element. Add
      <kbd>v-tooltip</kbd> directive to any non self closing elements.
      Also you can control the position of the tooltip with the help of
      modifiers
      <kbd>bottom</kbd>,
      <kbd>left</kbd>,
      <kbd>right</kbd>.
    </p>
    <Btn v-tooltip="'It\'s a top!'">Top tooltip</Btn>
    <Btn v-tooltip.right="'Always right'">Right tooltip</Btn>
    <Btn v-tooltip.bottom="time">Bottom tooltip</Btn>
    <Btn v-tooltip.left="'Mutliline\n tooltip is\n awesome'">Left tooltip</Btn>

    <br />
    <br />
    <prism language="html" :code="html" />
    <i>
      Note: expression must be enclosed in
      <b>single quotes</b> if it's a string, or left as is if it's a variable.
    </i>

    <prism language="javascript" :code="js" />
  </component-view>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TooltipPage',
  data: () => ({
    now: new Date(),
    html: `<Btn v-tooltip="'It\\'s a top!'">Top tooltip</Btn>
<Btn v-tooltip.right="'Always right'">Right tooltip</Btn>
<Btn v-tooltip.bottom="time">Bottom tooltip</Btn>
<Btn v-tooltip.left="'Mutliline\\n tooltip is\\n awesome'">Left tooltip</Btn>`,
    js: `export default {
  data: () => ({
    now: new Date(),
  }),
  computed: {
    time() {
      return this.now.toISOString().split(/[T .]/i)[1];
    },
  },
  mounted() {
    setInterval(() => (this.now = new Date()), 1000);
  },
}`,
  }),
  computed: {
    time(): string {
      return this.now.toISOString().split(/[T .]/i)[1];
    },
  },
  mounted() {
    setInterval(() => (this.now = new Date()), 1000);
  },
});
</script>
