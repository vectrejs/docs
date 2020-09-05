<template>
  <component-view>
    <h2 class="title">Chips</h2>
    <p>Chips are complex entities in small blocks.</p>

    <Chip text="Arya Stark" />
    <Chip text="Tyrion Lannister" active />
    <Chip text="John Snow" avatar="https://picturepan2.github.io/spectre/img/avatar-1.png" />
    <Chip text="Khal Drogo" initials="KD" />
    <Chip v-if="alive" text="Ned Stark" @close="alive = false" />

    <prism language="html" :code="code" />
  </component-view>
</template>

<script lang="ts">
import Vue from 'vue';
import { events } from './events';
import { props } from './props';

export default Vue.extend({
  name: 'ChipPage',

  data: () => ({
    props,
    events,
    alive: true,
    code: `<Chip text="Arya Stark" />
<Chip text="Tyrion Lannister" active />
<Chip text="John Snow" avatar="img/avatar-1.png" />
<Chip text="Khal Drogo" initials="KD" />
<Chip v-if="alive" text="Ned Stark" @close="alive = false" />
`,
  }),
});
</script>
