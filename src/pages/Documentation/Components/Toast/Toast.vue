<template>
  <component-view>
    <h2 class="title">Toast</h2>
    <p>Toasts are used to show alert or information to users.</p>

    <!-- <h3 class="subtitle">Basic usage</h3> -->
    <columns>
      <column col="8" xl="9" sm="12">
        <toast content="The <b>simplest</b> toast" />
      </column>
      <column col="8" xl="9" sm="12">
        <toast type="success" icon="check">
          <template #content>Keep it up!</template>
        </toast>
      </column>
      <column col="8" xl="9" sm="12">
        <toast type="warning" icon="flag" content="The last milestone has been passed." />
      </column>
      <column col="8" xl="9" sm="12">
        <toast type="error" icon="time" closeable>
          <template #content>Wake up! The time has come.</template>
        </toast>
      </column>
    </columns>
    <prism language="html" :code="baseHtml" />

    <h3 class="subtitle">Advanced</h3>
    <columns>
      <column col="8" xl="9" sm="12">
        <toast type="primary" icon="people" closeable>
          <template #title>Who was the voice of Mickey Mouse?</template>
          <template #content>
            <small>Originally, Walt Disney himself was the voice of Mickey Mouse, followed by Jim MacDonald, and later Wayne Allwine provided Mickey's distinctive voice. Mickey's new voice has not been offically announced.</small>
          </template>
          <template #action>
            <btn action type="link" size="sm" icon="bookmark" v-tooltip.left="'bookmark'" />
          </template>
        </toast>
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
import { methods } from './methods';
import { slots } from './slots';
import { props } from './props';

export default Vue.extend({
  name: 'ToastPage',

  data: () => ({
    events,
    methods,
    props,
    slots,
    baseHtml: `<toast content="The <b>simplest</b> toast" />

<toast type="success" icon="check">
  <template #content>Keep it up!</template>
</toast>

<toast 
  type="warning" 
  icon="flag" 
  content="The last milestone has been passed." 
/>

<toast type="error" icon="time" closeable>
  <template #content>Wake up! The time has come.</template>
</toast>`,
    advancedHtml: `<toast type="primary" icon="people" closeable>
  <template #title>Who was the voice of Mickey Mouse?</template>
  <template #content>
    <small>
      Originally, Walt Disney himself was the voice of Mickey Mouse...
    </small>
  </template>
  <template #action>
    <btn action type="link" 
      icon="bookmark" size="sm"
      v-tooltip.left="'bookmark'" 
    />
  </template>
</toast>

<!-- OR Composition -->

<toast type="primary" icon="people" ref="toast">
  <toast-icon icon="people" large />
  <toast-body>
    <toastTitle>Who was the voice of Mickey Mouse?</toastTitle>
    <toastContent>
      <small>
        Originally, Walt Disney himself was the voice of Mickey Mouse...
      </small>
    </toastContent>
  </toast-body>
  <toast-action>
    <btn class="btn-clear" @click="close" />
    <btn action type="link" 
      size="sm" icon="bookmark" 
      v-tooltip.left="'bookmark'" 
    />
  </toast-action>
</toast>`,
    advancedJs: `export default {
  methods: {
    close() {
      this.$refs.toast.close();
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
