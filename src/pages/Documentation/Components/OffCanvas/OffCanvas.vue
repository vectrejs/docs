<template>
  <component-view>
    <h2 class="title">
      Off-canvas
      <sup style="font-size: 0.7rem">
        <Tag v-tooltip="'Requires additional css file'" rounded type="error">Experimental</Tag>
      </sup>
    </h2>
    <p>
      Off-canvas is a navigation layout where the sidebar can slide in and out of the page. It's perfect for creating
      mobile navigations.
    </p>

    <!-- <h3 class="subtitle">Basic usage</h3> -->
    <columns>
      <column col="12">
        <OffCanvas id="off-canvas-example" :sidebar="false" overlay="0.6" icon="apps" close-on-overlay>
          <template #sidebar>Sidebar</template>
          <template #content>
            <h4>Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet,
              feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.
            </p>
            <p>
              Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but
              rub face on everything hopped up on goofballs.
            </p>
          </template>
        </OffCanvas>
      </column>
    </columns>
    <prism language="html" :code="baseHtml" />
    <prism language="js" :code="baseJs" />
  </component-view>
</template>

<script lang="ts">
import Vue from 'vue';
import { events } from './events';
import { slots } from './slots';
import { props } from './props';
import { methods } from './methods';

export default Vue.extend({
  name: 'OffCanvasPage',

  data: () => ({
    events,
    props,
    slots,
    methods,
    active: false,
    baseHtml: `<OffCanvas
  :sidebar="false"
  icon="apps"
  overlay="0.6"
  close-on-overlay
>
  <template #sidebar>Sidebar</template>
  <template #content>
    <h4>Lorem ipsum</h4>
    ...
  </template>
</OffCanvas>

<!-- OR Composition -->

<OffCanvas>
  <OffCanvasToggle icon="apps" @click="active = true" />
  <OffCanvasSidebar :active="active">Sidebar</OffCanvasSidebar>
  <OffCanvasOverlay opacity="0.6" @click="active = false" />
  <OffCanvasContent>
    <h4>Lorem ipsum</h4>
    ...
  </OffCanvasContent>
</OffCanvas>
`,
    baseJs: `// ONLY for composition case

export default {
  data: () => ({
    active: false,
  })
}`,
  }),
});
</script>

<style>
#off-canvas-example .off-canvas-sidebar {
  align-items: center;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  justify-content: center;
}
</style>
