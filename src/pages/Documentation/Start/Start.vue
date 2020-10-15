<template>
  <div>
    <column col="10" xl="10" lg="9" md="12" mr>
      <Overview id="introduction" />
      <Installation id="installation" />
      <Playgrounds id="playgrounds" />
    </column>
  </div>
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
