<template>
  <container>
    <columns>
      <column col="10" md="12" xs="12">
        <Overview id="introduction" />
      </column>
      <column col="10" md="12" xs="12">
        <Installation id="installation" />
      </column>
      <column col="10" md="12" xs="12">
        <Playgrounds id="playgrounds" />
      </column>
    </columns>
  </container>
</template>

<script lang="ts">
import Vue from 'vue';
import Installation from './Installation.vue';
import Overview from './Overview.vue';
import Playgrounds from './Playgrounds.vue';

export default Vue.extend({
  name: 'StartPage',
  components: {
    Installation,
    Overview,
    Playgrounds,
  },
});
</script>
