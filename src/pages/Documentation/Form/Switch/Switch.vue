<template>
  <component-view>
    <h2 class="title">Switch</h2>
    <p>You have two options for creating a switch:</p>
    <ol>
      <li>using the <code>&lt;form-checkbox /&gt;</code> component but with <kbd>switch</kbd> type</li>
      <li>
        using separate <code>&lt;form-switch /&gt;</code> which is essentially a wrapper around the
        <code>&lt;form-checkbox /&gt;</code> with a hardcoded <i>type</i> and the same rest of the behavior and
        properties. You can find information about props and slots at the following
        <router-link to="/pages/form/checkbox">link</router-link>.
      </li>
    </ol>

    <form-switch v-model="light"> Light </form-switch>
    Ligth: {{ light ? 'ON' : 'OFF' }}

    <prism language="html" :code="basicHtml" />
    <prism language="javascript" :code="basicJs" />

    <h3 class="subtitle">Group</h3>
    <p>
      Switch components can be grouped like the checkboxes with <code>&lt;form-checkbox-group&gt;</code> and
      <kbd>switch</kbd> type OR <code>&lt;form-switch-group /&gt;</code>.
    </p>

    <form-switch-group v-model="conditions" :options="['Temperature', 'Humidity', 'Ventilation', 'Lighting']" />

    Environment conditions: {{ conditions }}
    <prism language="html" :code="groupHtml" />
    <prism language="javascript" :code="groupJs" />

    <p>The same with nested elements:</p>
    <prism language="html" :code="nestedHtml" />
  </component-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FormSwitch, FormSwitchGroup } from '@vectrejs/vectre';

export default defineComponent({
  name: 'SwitchPage',
  components: { FormSwitch, FormSwitchGroup },
  data: () => ({
    light: false,
    conditions: [],

    basicHtml: `<form-switch v-model="light"> Light </form-switch>

<!-- OR same with <form-checkbox type="switch" ... /> -->

<form-checkbox type="switch" v-model="light">
  Light
</form-checkbox>

Ligth: {{ light ? 'ON' : 'OFF' }}`,
    basicJs: `export default {
  data: () => ({
    light: false,
  }),
}`,
    groupHtml: `<form-switch-group 
  v-model="conditions" 
  :options="['Temperature', 'Humidity', 'Ventilation', 'Lighting']" 
/>

<!-- OR same with <form-checkbox-group type="switch" ... /> -->

<form-checkbox-group
  type="switch"
  v-model="conditions"
  :options="['Temperature', 'Humidity', 'Ventilation', 'Lighting']"
/>
Environment conditions: {{ conditions }}`,
    groupJs: `export default {
  data: () => ({
    conditions: [], // Should be an array
  }),
}`,
    nestedHtml: `<form-switch-group v-model="conditions">
  <form-switch value="Temperature" />
  <form-switch value="Humidity" />
  <form-switch value="Ventilation" />
  <form-switch value="Lighting" />
</form-switch-group>

<!-- OR same with <form-checkbox-group type="switch" ... /> -->
    
<form-checkbox-group type="switch" v-model="conditions">
  <form-checkbox value="Temperature"/>
  <form-checkbox value="Humidity"/>
  <form-checkbox value="Ventilation"/>
  <form-checkbox value="Lighting"/>
</form-checkbox-group>`,
  }),
});
</script>
