<template>
  <component-view>
    <h3 class="subtitle">Overlay</h3>
    <p>
      An overlay provides contextual information and options in form of an additional layer on top of the current state
      of the interface. It is usually used when it is necessary to interrupt the user's current task in order to draw
      his attention to something more important.
    </p>

    <columns>
      <column col="6" xs="12" xl="6" lg="6">
        <card class="p-relative">
          <card-image img="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg" />
          <card-header>
            <h4>Microsoft</h4>
            <div class="text-gray">Hardware and software</div>
          </card-header>
          <card-body>Empower every person and every organization on the planet to achieve more.</card-body>
          <card-footer class="text-right">
            <btn type="primary" @click="show = true">Show Overlay</btn>
            <overlay
              :show="show"
              :blur="blur"
              :opacity="opacity"
              :z-index="zIndex"
              :fullscreen="fullscreen"
              :no-scroll="noScroll"
              @click="show = false"
            >
              <btn @click="show = false"> Hide overlay </btn>
            </overlay>
          </card-footer>
        </card>
      </column>
      <column col="6" xs="12" xl="6" lg="6" mx>
        <form-group>
          <form-label>Opacity</form-label>
          <form-slider v-model="opacity" max="99" tooltip="%" />
        </form-group>
        <form-group>
          <form-label>Blur</form-label>
          <form-slider v-model="blur" max="8" tooltip="px" />
        </form-group>
        <form-switch v-model="fullscreen" label="Fullscreen" />
        <form-switch v-model="noScroll" label="No scroll" :disabled="!fullscreen" />
      </column>
    </columns>

    <prism language="html" :code="html" />
    <prism language="javascript" :code="js" />

    <i>
      Note: the overlay must be assigned to an element with a <b>relative</b> position so as not to cover the
      fullscreen. For this you can use the special <code>p-relative</code> class
    </i>
  </component-view>
</template>

<script lang="ts">
import Vue from 'vue';
import { events } from './events';
import { props } from './props';
import { slots } from './slots';

export default Vue.extend({
  name: 'OverlayPage',

  data: () => ({
    props,
    slots,
    events,
    show: true,
    blur: 0,
    zIndex: 10,
    opacity: 75,
    fullscreen: false,
    noScroll: false,
    // tslint:disable:max-line-length
    html: `<card class="p-relative">
  <card-image img="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg" />
  <card-header>Header</card-header>
  <card-body>Body text</card-body>
  <card-footer class="text-right">
    <btn type="primary" @click="show = true">Show Overlay</btn>

    <overlay
      :show="show"
      :blur="blur"
      :opacity="opacity"
      :z-index="zIndex"
      :fullscreen="fullscreen"
      :no-scroll="noScroll"
      @click="show = false"
    >
      <btn @click="show = false"> Hide overlay </btn>
    </overlay>
  </card-footer>
</card>
`,
    // tslint:enable:max-line-length
    js: `export default {
  data: () => ({
    show: true,
    blur: 0,
    zIndex: 6,
    opacity: 75,
    fullscreen: false,
    noScroll: false,
  }),
}`,
  }),
});
</script>
