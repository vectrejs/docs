<template>
  <component-view>
    <h3 class="subtitle">Modals</h3>
    <p>Modals are flexible dialog prompts.</p>

    <Btn @click="modal = true">Default</Btn>
    <Btn type="error" @click="small = true">Small</Btn>
    <Btn type="primary" @click="large = true">Large</Btn>
    <Btn type="link" @click="composed = true">Composed</Btn>

    <Modal v-model="modal">
      <h5 slot="header">Default modal</h5>
      <p slot="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet,
        feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.
      </p>
      <Btn slot="footer" type="primary" @click="modal = false">Ok</Btn>
    </Modal>

    <Modal v-model="small" size="sm" :close-overlay="false">
      <h5 slot="header">Small without overlay close</h5>
      <p slot="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet,
        feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.
      </p>
    </Modal>

    <Modal v-model="large" size="lg" :close-btn="false">
      <h2 slot="header" class="title">Big without close button</h2>
      <p slot="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet,
        feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.
      </p>
    </Modal>

    <Modal v-model="composed" size="lg">
      <ModalHeader>
        <h3>Composed modal</h3>
      </ModalHeader>
      <ModalHeader>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet,
        feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.
      </ModalHeader>
      <ModalFooter>
        <Btn slot="footer" type="error" @click="composed = false">Got it!</Btn>
      </ModalFooter>
    </Modal>

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
    html: `<Btn @click="modal = true">Default</Btn>
<Btn @click="small = true">Small</Btn>
<Btn @click="large = true">Large</Btn>
<Btn @click="composed = true">Composed</Btn>

<Modal v-model="modal">
  <h5 slot="header">Default modal</h5>
  <p slot="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  <Btn slot="footer" type="primary" @click="modal = false">Ok</Btn>
</Modal>

<Modal v-model="small" size="sm" :close-overlay="false">
  <!-- Modal without overlay closet  -->
</Modal>

<Modal :show="large" size="lg" @close="large = false" :closeBtn="false">
  <!-- Big without close button  -->
</Modal>

<!-- Or with composition -->

<Modal v-model="composed" size="lg">
  <ModalHeader>
    <h3>Composed modal</h3>
  </ModalHeader>
  <ModalHeader>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet,
    feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.
  </ModalHeader>
  <ModalFooter>
    <Btn slot="footer" type="error" @click="composed = false">Got it!</Btn>
  </ModalFooter>
</Modal>
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
