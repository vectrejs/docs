<template>
  <component-view>
    <h2 class="title">Textarea</h2>
    <p>A multi-line text input control. The main difference from the native is <b>v-model</b> support</p>

    <columns>
      <column col="7" xl="8" lg="9" xs="11">
        <form-textarea v-model="message">Text...</form-textarea>
        Your message: {{ message }}
      </column>
    </columns>
    <prism language="html" :code="basicHtml" />
    <prism language="javascript" :code="basicJs" />
  </component-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Columns, Column, FormTextarea } from '@vectrejs/vectre';
import { slots } from './slots';

export default defineComponent({
  name: 'TextareaPage',
  components: { Columns, Column, FormTextarea },
  data: () => ({
    slots,
    message: '',
    basicHtml: `<form-textarea
  v-model="message"
  placeholder="Text..."
/>

<!-- Same with default slot -->

<form-textarea v-model="message">Text...</form-textare>`,
    basicJs: `export default {
  data: () => ({
    message: '',
  }),
}`,
  }),
});
</script>
