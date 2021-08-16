<template>
  <div class="slots table-responsive">
    <h3 class="subtitle">
      {{ name }}
      <tag rounded type="secondary">Slots</tag>
    </h3>

    <table class="table">
      <col style="width: 10%" />
      <col style="width: 50%" />
      <col style="width: 40%" />
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Scope</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(slot, key) in slots" :key="key">
          <td>
            {{ key }}
            <sup v-if="slot.required">*</sup>
          </td>
          <td v-html="slot.description"></td>
          <td>{{ slot.scope || '-' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Tag } from '@vectrejs/vectre';
import { defineComponent, PropType } from 'vue';
import { SlotDefinitions } from './defs';

export default defineComponent({
  components: { Tag },
  props: {
    name: {
      type: String,
      default: '',
    },
    slots: {
      type: Object as PropType<SlotDefinitions>,
      required: true,
    },
  },
});
</script>
