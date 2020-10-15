<template>
  <component-view>
    <h3 class="subtitle">Modals</h3>
    <p>Modals are flexible dialog prompts.</p>

    <btn @click="modal = true">Default</btn>
    <btn type="error" @click="small = true">Small</btn>
    <btn type="primary" @click="large = true">Large</btn>
    <btn type="link" @click="composed = true">Composed</btn>

    <modal v-model="modal">
      <h5 slot="header">History of Daylight Saving Time</h5>
      <p slot="body">
        The concept of setting the clocks ahead in the spring in order to make better use of natural daylight was first
        introduced by US inventor Benjamin Franklin in 1784.
      </p>
      <btn slot="footer" type="primary" @click="modal = false">Ok</btn>
    </modal>

    <modal v-model="small" size="sm" :overlay="50" :close-overlay="false" :no-scroll="false">
      <h5 slot="header">What is Linear B?</h5>
      <p slot="body">
        Linear B is a syllabic script that was used for writing Mycenaean Greek, the earliest attested form of Greek.
        The script predates the Greek alphabet by several centuries.
      </p>
    </modal>

    <modal v-model="large" size="lg" :close-btn="false">
      <h2 slot="header" class="title">Big without close button</h2>
      <p slot="body">
        Left-handedness is less common than right-handedness. Left-handed people are more skillful with their left hands
        when performing tasks. Studies suggest that approximately 10% of the world population is left-handed.
        Mixed-handedness is the change of hand preference between tasks.
      </p>
    </modal>

    <modal v-model="composed" size="lg">
      <modal-header>
        <h3>Do yellow jackets die after they sting you?</h3>
      </modal-header>
      <modal-body>
        Yellowjackets are more aggressive than other stinging insects such as wasps, hornets, mud daubers or bees.
        Yellowjackets can sting and bite. Since they don't lose their stinger, they can sting numerous times, and will
        do so unprovoked.
      </modal-body>
      <modal-footer>
        <btn slot="footer" type="error" @click="composed = false">Got it!</btn>
      </modal-footer>
    </modal>

    <prism language="html" :code="html" />
    <prism language="javascript" :code="js" />
  </component-view>
</template>

<script lang="ts">
import Vue from 'vue';
import { props } from './props';
import { slots } from './slots';
import { events } from './events';

export default Vue.extend({
  name: 'ModalPage',

  data: () => ({
    props,
    slots,
    events,
    modal: false,
    small: false,
    large: false,
    composed: false,
    // tslint:disable:max-line-length
    html: `<btn @click="modal = true">Default</btn>
<btn @click="small = true">Small</btn>
<btn @click="large = true">Large</btn>
<btn @click="composed = true">Composed</btn>

<modal v-model="modal">
  <h5 slot="header">Default modal</h5>
  <p slot="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  <btn slot="footer" type="primary" @click="modal = false">Ok</btn>
</modal>

<modal v-model="small" size="sm" :overlay="50" :close-overlay="false" :no-scroll="false">
  <!-- Modal without overlay closet  -->
</modal>

<modal :show="large" size="lg" @close="large = false" :close-btn="false">
  <!-- Big without close button  -->
</modal>

<!-- Or with composition -->

<modal v-model="composed" size="lg">
  <modal-header>
    <h3>Composed modal</h3>
  </modal-header>
  <modal-body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet,
    feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.
  </modal-body>
  <modal-footer>
    <btn slot="footer" type="error" @click="composed = false">Got it!</btn>
  </modal-footer>
</modal>
`,
    // tslint:enable:max-line-length
    js: `export default {
  data: () => ({
    modal: false,
    small: false,
    large: false,
  }),
}`,
  }),
});
</script>
