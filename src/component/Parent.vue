<template>
  <div>
    <h2 v-if="title">{{ title }}</h2>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import Vue from 'vue';

@Component
export default class extends Vue {
  @Prop(String) private title!: string;
}
</script>
