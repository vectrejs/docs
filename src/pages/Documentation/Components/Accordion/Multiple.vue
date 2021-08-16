<template>
  <div class="section">
    <h3 class="subtitle">Multiple</h3>
    <columns>
      <column col="4" xs="8">
        <accordion :items="items" multiple />
      </column>
    </columns>
    <prism language="html" :code="html" />
  </div>
</template>

<script lang="ts">
import { Columns, Column, Accordion } from '@vectrejs/vectre';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { Columns, Column, Accordion },
  data: () => ({
    html: '<accordion :items="items" multiple>',
    items: {
      'Fact 4':
        'The calcium in our bones and the iron in <b>our blood</b> come from ancient <b> explosions of giant stars</b>.',
      'Fact 5': 'People reportedly prefer blue toothbrushes over red ones.',
      'Fact 6': 'Some people used to believe that kissing a donkey could relieve a toothache.',
    },
  }),
});
</script>
