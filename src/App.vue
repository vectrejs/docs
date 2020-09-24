<template>
  <router-view />
</template>

<script lang="ts">
import vue from 'vue';
import { Component } from 'vue-property-decorator';

import './assets/';
import router from './router';

@Component({
  router,
})
export default class App extends vue {}
</script>
