<template>
  <div class="props table-responsive">
    <h3 class="subtitle">
      {{ name }}
      <tag rounded type="warning">Events</tag>
    </h3>

    <table class="table">
      <col style="width: 10%" />
      <col style="width: 50%" />
      <col style="width: 40%" />
      <thead>
        <tr>
          <th>Event</th>
          <th>Description</th>
          <th>Payload</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(event, key) in events" :key="key">
          <td>{{ key }}</td>
          <td v-html="event.description"></td>
          <td>{{ event.payload }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Tag } from '@vectrejs/vectre';
import { defineComponent, PropType } from 'vue';
import { EventDefinitions } from './defs';

export default defineComponent({
  components: { Tag },
  props: {
    name: {
      type: String,
      default: '',
    },
    events: {
      type: Object as PropType<EventDefinitions>,
      required: true,
    },
  },
});
</script>
