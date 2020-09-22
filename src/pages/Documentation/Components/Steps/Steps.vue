<template>
  <component-view>
    <h2 class="title">Steps</h2>
    <p>Steps are progress indicators of a sequence of task steps.</p>
    <columns>
      <column col="9" xs="12">
        <steps :active="active">
          <step>Step 1</step>
          <step>Step 2</step>
          <step>Step 3</step>
          <step>Step 4</step>
          <step tooltip="Finish">Step 5</step>
        </steps>
      </column>
      <column col="3" xs="2" mx>
        <btn @click="next">Next</btn>
      </column>
    </columns>
    <prism language="html" :code="html" />
    <prism language="javascript" :code="js" />
    <p>
      <code>items</code> prop should have a certain structure to be used in a simplified way:
    </p>
    <pre>
Array of {
  name: string,
  tooltip?: string
}</pre>
  </component-view>
</template>

<script lang="ts">
import Vue from 'vue';
import { props } from './props';

export default Vue.extend({
  name: 'StepsPage',

  data: () => ({
    props,
    active: 1,
    items: [
      { name: 'Step 1' },
      { name: 'Step 2' },
      { name: 'Step 3' },
      { name: 'Step 4' },
      { name: 'Step 5', tooltip: 'Finish' },
    ],
    html: `<steps :items="items" :active="active" />
<Btn @click="next">Next</Btn>

<!-- OR Composition -->

<steps :active="active">
  <step>Step 1</step>
  <step>Step 2</step>
  <step>Step 3</step>
  <step>Step 4</step>
  <step tooltip="'Finish'">Step 5</step>
</steps>`,
    js: `export default {
  methods: {
    next() {
      this.active = (this.active + 1) % 6;
    },
  },
  data: () => ({
    active: 1,
    items: [
      { name: 'Step 1' },
      { name: 'Step 2' },
      { name: 'Step 3' },
      { name: 'Step 4' },
      { name: 'Step 5', tooltip: 'Finish' },
    ],
  }),
}`,
  }),
  methods: {
    next(): void {
      this.active = (this.active + 1) % 6;
    },
  },
});
</script>
