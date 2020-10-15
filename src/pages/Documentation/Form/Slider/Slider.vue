<template>
  <component-view>
    <h2 class="title">
      Slider
      <sup style="font-size: 0.7rem">
        <Tag v-tooltip="'Requires additional css file'" rounded type="error">Experimental</Tag>
      </sup>
    </h2>
    <p>Sliders allow the user to select values from ranges.</p>
    <columns>
      <column col="5" xl="5" lg="6" xs="8">
        <form-slider v-model="basic" max="100" min="-100" step="5" />
      </column>
    </columns>
    Value: {{ basic }}
    <prism language="html" :code="basicHtml" />
    <prism language="javascript" :code="basicJs" />

    <h5 class="subtitle">Tooltip</h5>
    <p>You can define a <kbd>tooltip</kbd> prop to show the current state of the slider.</p>

    <columns>
      <column col="7" lg="7" xs="8">
        <form-group>
          <form-label>Score</form-label>
          <form-slider v-model="score" tooltip step="0.1" />
        </form-group>
      </column>
      <column col="7" lg="7" xs="8">
        <form-group>
          <form-label>Distance</form-label>
          <form-slider v-model="distance" tooltip="km" min="5" max="100" />
        </form-group>
      </column>
      <column col="7" lg="7" xs="8">
        <form-group>
          <form-label>Priority</form-label>
          <form-slider v-model="priority" :tooltip="calculatePriority" min="1" max="3" />
        </form-group>
      </column>
    </columns>
    <prism language="html" :code="tooltipHtml" />
    <prism language="javascript" :code="tooltipJs" />

    <h5 class="subtitle">Disabled</h5>
    <columns>
      <column col="5" xl="5" lg="6" xs="8">
        <form-slider disabled />
      </column>
    </columns>
    <prism language="html" code="<form-slider disabled />" />
  </component-view>
</template>

<script lang="ts">
import Vue from 'vue';
import { events } from './events';
import { props } from './props';

export default Vue.extend({
  name: 'SelectPage',

  data: () => ({
    events,
    props,
    basic: 0,
    score: 10,
    distance: 50,
    priority: 3,
    basicHtml: `<form-slider v-model="value" max="100" min="-100" step="5" />`,
    basicJs: `export default {
  data: () => ({
    value: 0,
  }),
}`,
    tooltipHtml: `<form-slider v-model="score" tooltip step="0.1" />
<form-slider v-model="distance" tooltip="km" min="5" max="100" />
<form-slider v-model="priority" :tooltip="calculatePriority" min="1" max="3" />`,
    tooltipJs: `export default {
  data: () => ({
    score: 10,
    distance: 50,
    priority: 3,
  }),
  methods: {
    calculatePriority: (value: string): string => {
      switch (String(value)) {
        case '1':
          return 'low';
        case '2':
          return 'medium';
        case '3':
          return 'high';
        default:
          return 'error!';
      }
    },
  },
}`,
  }),
  methods: {
    calculatePriority: (value: string): string => {
      switch (String(value)) {
        case '1':
          return 'low';
        case '2':
          return 'medium';
        case '3':
          return 'high';
        default:
          return 'error!';
      }
    },
  },
});
</script>
