<template>
  <component-view>
    <h2 class="title">Toast</h2>
    <p>Toasts are used to show alert or information to users.</p>

    <!-- <h3 class="subtitle">Basic usage</h3> -->
    <columns>
      <column col="8" xl="9" sm="12">
        <Toast content="The <b>simplest</b> toast" />
      </column>
      <column col="8" xl="9" sm="12">
        <Toast type="success" icon="check">
          <template #content>Keep it up!</template>
        </Toast>
      </column>
      <column col="8" xl="9" sm="12">
        <Toast type="warning" icon="flag" content="The last milestone has been passed." />
      </column>
      <column col="8" xl="9" sm="12">
        <Toast type="error" icon="time" closeable>
          <template #content>Wake up! The time has come.</template>
        </Toast>
      </column>
    </columns>
    <prism language="html" :code="baseHtml" />

    <h3 class="subtitle">Advanced</h3>
    <columns>
      <column col="8" xl="9" sm="12">
        <Toast type="primary" icon="people" closeable>
          <template #title>Who was the voice of Mickey Mouse?</template>
          <template #content>
            <small>Originally, Walt Disney himself was the voice of Mickey Mouse, followed by Jim MacDonald, and later Wayne Allwine provided Mickey's distinctive voice. Mickey's new voice has not been offically announced.</small>
          </template>
          <template #action>
            <Btn action type="link" size="sm" icon="bookmark" v-tooltip.left="'bookmark'" />
          </template>
        </Toast>
      </column>
    </columns>

    <prism language="html" :code="advancedHtml" />
    <prism language="js" :code="advancedJs" />
  </component-view>
</template>

<script lang="ts">
import Vue from 'vue';
import { Toast } from '@vectrejs/vectre';
import { events } from './events';
import { slots } from './slots';
import { props } from './props';

export default Vue.extend({
  name: 'ToastPage',

  data: () => ({
    events,
    props,
    slots,
    baseHtml: `<Toast content="The <b>simplest</b> toast" />

<Toast type="success" icon="check">
  <template #content>Keep it up!</template>
</Toast>

<Toast 
  type="warning" 
  icon="flag" 
  content="The last milestone has been passed." 
/>

<Toast type="error" icon="time" closeable>
  <template #content>Wake up! The time has come.</template>
</Toast>`,
    advancedHtml: `<Toast type="primary" icon="people" closeable>
  <template #title>Who was the voice of Mickey Mouse?</template>
  <template #content>
    <small>
      Originally, Walt Disney himself was the voice of Mickey Mouse...
    </small>
  </template>
  <template #action>
    <Btn action type="link" 
      icon="bookmark" size="sm"
      v-tooltip.left="'bookmark'" 
    />
  </template>
</Toast>

<!-- OR Composition -->

<Toast type="primary" icon="people" ref="toast">
  <ToastIcon icon="people" large />
  <ToastBody>
    <ToastTitle>Who was the voice of Mickey Mouse?</ToastTitle>
    <ToastContent>
      <small>
        Originally, Walt Disney himself was the voice of Mickey Mouse...
      </small>
    </ToastContent>
  </ToastBody>
  <ToastAction>
    <Btn class="btn-clear" @click="close" />
    <Btn action type="link" 
      size="sm" icon="bookmark" 
      v-tooltip.left="'bookmark'" 
    />
  </ToastAction>
</Toast>`,
    advancedJs: `export default {
  methods: {
    close() {
      this.$refs.toast.toggle();
    },
  },
};`,
  }),
  methods: {
    close(): void {
      (this.$refs.toast as Toast).close();
    },
  },
});
</script>
