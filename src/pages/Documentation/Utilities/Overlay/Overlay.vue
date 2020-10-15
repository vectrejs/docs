<template>
  <component-view>
    <h2 class="title">Overlay</h2>
    <p>
      An overlay provides contextual information and options in form of an additional layer on top of the current state
      of the interface. It is usually used when it is necessary to interrupt the user's current task in order to draw
      his attention to something more important.
    </p>
    <p>For these purposes, you can add <kbd>v-overlay</kbd> directive to an element to cover it with an overlay.</p>
    <columns>
      <column col="6" lg="12" mx>
        <card v-overlay="{ ...overlayConfig }" class="p-relative">
          <card-header style="z-index: 20">
            <h3>Demo</h3>
          </card-header>
          <card-body>
            <form-group>
              <form-label>Blur</form-label>
              <form-slider v-model="overlayConfig.blur" max="8" tooltip="px" />
            </form-group>
            <form-group>
              <form-label>Opacity</form-label>
              <form-slider v-model="overlayConfig.opacity" max="99" tooltip="%" />
            </form-group>
            <form-group>
              <form-label>Z Index</form-label>
              <form-slider v-model="overlayConfig.zIndex" max="1000" min="2" tooltip />
            </form-group>

            <form-group>
              <form-label>Text</form-label>
              <form-input v-model="overlayConfig.text" placeholder="Text" />
            </form-group>
          </card-body>
          <card-footer class="text-center mt-2">
            <btn type="primary" @click="overlayConfig.show = true">Show</btn>
          </card-footer>
        </card>
      </column>
    </columns>

    <prism language="html" :code="overlayHtml" />
    <prism language="js" :code="overlayJs" />

    <p>The directive supports multiple <b>value</b> types depending on the scenario:</p>
    <ul>
      <li><kbd>Boolean</kbd> is just a overlay switch. E.g. <code>&lt;div v-overlay="false" /&gt;</code></li>
      <li>
        <kbd>String</kbd> is the text that will be displayed in the center of the overlay. <br />
        E.g.
        <code>&lt;div v-overlay="show && 'My Text Inside Overlay'" /&gt;</code>
      </li>
      <li>
        <kbd>Function</kbd> can be used as a callback when clicking on overlay. <br />
        E.g.
        <code>&lt;div v-overlay="show && (() => (show = false))" /&gt;</code>
      </li>
      <li>
        <kbd>Object</kbd> is an advanced option that allows flexible setting of overlay. The object have a certain
        structure:
        <pre>
{
  show: boolean, // false by default
  onClick: function, 
  text: string, 
  blur: string | number, // 2 
  opacity: string | number, // 75 
  zIndex: string | number, // 1
}</pre
        >
      </li>
    </ul>

    <i>
      Note: the overlay must be assigned to an element with a <b>relative</b> position so as not to cover the
      fullscreen. For this you can use the special <code>p-relative</code> class
    </i>

    <h5 class="subtitle">Modifiers</h5>
    <p>
      Add
      <code>fullscreen</code> modifier for fullscreen overlay.
    </p>
    <div v-overlay.fullscreen="fullscreen && (() => (fullscreen = false))" class="text-center">
      <btn type="primary" @click="fullscreen = true">Fullscreen Overlay</btn>
    </div>
    <prism language="html" :code="fullscreenHtml" />

    <p>
      Add
      <code>noScroll</code> modifier to disable background scrolling when overlay is shown.
    </p>
    <div v-overlay.fullscreen.noScroll="noscroll && (() => (noscroll = false))" class="text-center">
      <btn type="primary" @click="noscroll = true">Fullscreen Without Scroll</btn>
    </div>
    <prism language="html" :code="noScrollHtml" />

    <p>
      Add
      <code>blur</code> modifier to blur the background.
    </p>
    <div v-overlay.fullscreen.blur="blur && (() => (blur = false))" class="text-center">
      <btn type="primary" @click="blur = true">Blured Fullscreen</btn>
    </div>
    <prism language="html" :code="blurHtml" />
  </component-view>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'OverlayDirectivePage',
  data: function () {
    return {
      overlayConfig: {
        show: false,
        blur: 0,
        opacity: 75,
        zIndex: 21,
        text: '<H2>Click to Close</H2>',
        onClick: (): boolean => this.$set((this as any).overlayConfig, 'show', false),
      },
      blur: false,
      noscroll: false,
      fullscreen: false,
      overlayHtml: `<card 
  v-overlay="{ text, opacity, blur, onClick: () => (show = false)  }" 
  class="p-relative"
>
  <card-header style="z-index: 20">
    <h3>Demo</h3>
  </card-header>
  <card-body>    
    <form-slider v-model="blur" max="8" tooltip="px" />
    <form-slider v-model="opacity" max="99" tooltip="%" />
    <form-slider v-model="zIndex" max="1000" min="2" tooltip />
    <form-input v-model="overlayConfig.text" placeholder="Text" />
  </card-body>
  <card-footer class="text-center mt-2">
    <btn type="primary" @click="show = true">Show</btn>
  </card-footer>
</card>`,
      fullscreenHtml: `<div v-overlay.fullscreen="show && (() => (show = false))">
  <btn @click="show = true">Fullscreen Overlay</btn>
</div>`,
      noScrollHtml: `<div v-overlay.noScroll.fullscreen="show && (() => (show = false))">
  <btn @click="show = true">Fullscreen Overlay</btn>
</div>`,
      blurHtml: `<div v-overlay.blur.fullscreen="show && (() => (show = false))">
  <btn @click="show = true">Fullscreen Overlay</btn>
</div>`,
      overlayJs: `export default {
  data: () => ({
    show: false,
    blur: 0,
    opacity: 75,
    zIndex: 21,
    text: '<H2>Click to Close</H2>',
  }),
}`,
    };
  },
});
</script>
