<template>
  <container>
    <Overview id="introduction" />
    <Installation id="installation" />
    <h2 class="title">Quick Start</h2>
  </container>
</template>

<script lang="ts">
import Vue from 'vue';
import Installation from './Installation.vue';
import Overview from './Overview.vue';

export default Vue.extend({
  name: 'StartPage',
  components: {
    Installation,
    Overview,
  },
});
</script>
