<template>
  <div>
    <h2 v-if="title">{{ title }}</h2>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  props: {
    title: { type: String, required: false },
  },
});
</script>
