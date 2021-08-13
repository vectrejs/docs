<template>
  <div>
    <Column col="10" xl="10" lg="9" md="12" mr>
      <Overview id="introduction" />
      <Installation id="installation" />
      <Playgrounds id="playgrounds" />
    </Column>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Column } from '@vectrejs/vectre';
import Installation from './Installation.vue';
import Overview from './Overview.vue';
import Playgrounds from './Playgrounds.vue';

export default defineComponent({
  name: 'StartPage',
  components: {
    Column,
    Installation,
    Overview,
    Playgrounds,
  },
});
</script>
