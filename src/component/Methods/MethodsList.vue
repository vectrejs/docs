<template>
  <div class="methods table-responsive">
    <h3 class="subtitle">
      {{ name }}
      <tag rounded type="error">Methods</tag>
    </h3>

    <table class="table">
      <col style="width: 10%" />
      <col style="width: 50%" />
      <col style="width: 40%" />
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Arguments</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(method, key) in methods" :key="key">
          <td>{{ key }}</td>
          <td v-html="method.description"></td>
          <td>{{ method.arguments || '-' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    name: {
      type: String,
      default: '',
    },
    methods: {
      type: Object,
      required: true,
    },
  },
});
</script>
