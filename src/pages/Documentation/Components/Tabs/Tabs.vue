<template>
  <component-view>
    <h2 class="title">Tabs</h2>
    <p>Tabs allow you to quickly switch between different views.</p>

    <h3 class="subtitle">Basic use</h3>
    <columns>
      <column col="5" sm="8" xs="12">
        <tabs :current.sync="current" :items="['Music', 'Radio', 'Podcasts']" />
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
        <tabs block :current.sync="blockCurrent" :items="['Music', 'Radio', 'Podcasts']" />
        Current Tab: {{ blockCurrent }}
      </column>
    </columns>
    <prism language="html" :code="blockHtml" />

    <h3 class="subtitle">Advanced</h3>
    <columns>
      <column col="6" xl="8" xs="12">
        <tabs :current.sync="advancedCurrent">
          <tab key="music" :badge="badge">Music</tab>
          <tab>Radio</tab>
          <tab>Podcasts</tab>
          <tab-actions v-if="advancedCurrent != 'music'">
            <btn size="sm" @click="badge--, (advancedCurrent = 'music')">To music</btn>
          </tab-actions>
        </tabs>
        Current Tab: {{ advancedCurrent }}
      </column>
    </columns>
    <prism language="html" :code="advancedHtml" />
    <prism language="javascript" :code="advancedJs" />
  </component-view>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TabsPage',

  data: () => ({
    badge: 999,
    current: 'Radio',
    blockCurrent: 'Music',
    advancedCurrent: 'music',
    basicHtml: `<tabs :current.sync="current" :items="['Music', 'Radio', 'Podcasts']" />
Current Tab: {{ current }}`,
    basicJs: `export default {
  data: () => ({
    current: 'Radio',
  }),
};`,
    blockHtml: `<tabs block :current.sync="current" :items="['Music', 'Radio', 'Podcasts']" />
 Current Tab: {{ current }}`,
    advancedHtml: `<tabs :current.sync="current">
  <tab key="music" :badge="badge">Music</tab>
  <tab>Radio</tab>
  <tab>Podcasts</tab>
  <tab-actions v-if="current != 'music'">
    <btn @click="badge--, current = 'music'" size="sm">
        To music
    </btn>
  </tab-actions>
</tabs>`,
    advancedJs: `export default {
  data: () => ({
    current: 'music',
    badge: 999,
  }),
};`,
  }),
});
</script>
