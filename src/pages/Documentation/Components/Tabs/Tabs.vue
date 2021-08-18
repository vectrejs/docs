<template>
  <component-view>
    <h2 class="title">Tabs</h2>
    <p>Tabs allow you to quickly switch between different views.</p>

    <h3 class="subtitle">Basic use</h3>
    <columns>
      <column col="5" sm="8" xs="12">
        <tabs v-model="current" :items="['Music', 'Radio', 'Podcasts']" />
        Current Tab: {{ current }}
      </column>
    </columns>
    <prism language="html" :code="basicHtml" />
    <prism language="javascript" :code="basicJs" />

    <h5 class="subtitle">Block</h5>
    <p>
      You can add the
      <code>block</code> property for a full-width tab.
    </p>
    <columns>
      <column col="5" sm="8" xs="12">
        <tabs v-model="blockCurrent" block :items="['Music', 'Radio', 'Podcasts']" />
        Current Tab: {{ blockCurrent }}
      </column>
    </columns>
    <prism language="html" :code="blockHtml" />

    <h3 class="subtitle">Advanced</h3>
    <columns>
      <column col="6" xl="8" xs="12">
        <tabs v-model="advancedCurrent">
          <tab :badge="badge">Music</tab>
          <tab>Radio</tab>
          <tab>Podcasts</tab>
          <tab-action v-if="advancedCurrent != 0">
            <btn size="sm" @click="goToFirst">To music</btn>
          </tab-action>
        </tabs>
        Current Tab: {{ advancedCurrent }}
      </column>
    </columns>
    <prism language="html" :code="advancedHtml" />
    <prism language="javascript" :code="advancedJs" />
    <p><code>items</code> prop should have a certain structure to be used in advanced mode:</p>
    <pre>
Array of {
  name: string,
  badge?: string | number
}</pre
    >
  </component-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Columns, Column, Btn, Tabs, Tab, TabAction } from '@vectrejs/vectre';
import { events } from './events';
import { props } from './props';
import { slots } from './slots';

export default defineComponent({
  name: 'TabsPage',
  components: { Columns, Column, Btn, Tabs, Tab, TabAction },
  data: () => ({
    events,
    props,
    slots,
    badge: 999,
    current: 'Radio',
    blockCurrent: 'Music',
    advancedCurrent: 0,
    basicHtml: `<tabs v-model="current" :items="['Music', 'Radio', 'Podcasts']" />
Current Tab: {{ current }}`,
    basicJs: `export default {
  data: () => ({
    current: 'Radio',
  }),
};`,
    blockHtml: `<tabs v-model="blockCurrent" block :items="['Music', 'Radio', 'Podcasts']" />
 Current Tab: {{ current }}`,
    advancedHtml: `<tabs
  v-model="current"
  :items="[{ name: 'Music', badge }, { name: 'Radio' }, { name: 'Podcast' }]"
>
  <template #tab="{ item }">
    {{ item.name }}
  </template>
  <template #action>
    <tab-action v-if="advancedCurrent != 0">
      <btn size="sm" @click="goToFirst">To music</btn>
    </tab-action>
  </template>
</tabs>

<!-- OR with composition -->

<tabs v-model="current">
  <tab :badge="badge">Music</tab>
  <tab>Radio</tab>
  <tab>Podcasts</tab>
  <tab-action v-if="advancedCurrent != 0">
    <btn size="sm" @click="goToFirst">To music</btn>
  </tab-action>
</tabs>
`,
    advancedJs: `export default {
  data: () => ({
    current: 0,
    badge: 999,
  }),
  methods: {
    goToFirst() {
      this.badge -= 1;
      this.advancedCurrent = 0;
    },
  },
};`,
  }),
  methods: {
    goToFirst(): void {
      this.badge -= 1;
      this.advancedCurrent = 0;
    },
  },
});
</script>
