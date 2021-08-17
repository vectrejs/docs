<template>
  <component-view>
    <h2 class="title">Empty states</h2>
    <p>Empty states/blank slates are commonly used as placeholders for first time use, Empty data and error screens.</p>

    <columns>
      <column col="7" xs="12" mx>
        <empty icon="mail" title="You have no new messages" sub="Click the button to start a conversation">
          <template #action>
            <btn>Send a message</btn>
          </template>
        </empty>
      </column>

      <column col="7" xs="12" mx>
        <empty>
          <empty-icon icon="people" />
          <empty-title>You are not following anyone</empty-title>
          <empty-subtitle>Start to meet new friends</empty-subtitle>
          <empty-action>
            <btn>Search</btn>
          </empty-action>
        </empty>
      </column>
    </columns>

    <prism language="html" :code="code" />
  </component-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Column, Columns, Btn, Empty, EmptyAction, EmptyIcon, EmptyTitle, EmptySubtitle } from '@vectrejs/vectre';
import { props } from './props';
import { slots } from './slots';

export default defineComponent({
  name: 'EmptyPage',
  components: { Column, Columns, Btn, Empty, EmptyAction, EmptyIcon, EmptyTitle, EmptySubtitle },
  data: () => ({
    props,
    slots,
    code: `<empty 
  icon="mail" 
  title="You have no new messages" 
  sub="Click the button to start a conversation"
>
  <template #action>
    <btn>Send a message</btn>
  </template>
</empty>

<!-- Or with composition -->

<empty>
  <empty-icon icon="people" />
  <empty-title>You are not following anyone</empty-title>
  <empty-subtitle>Start to meet new friends</empty-subtitle>
  <empty-action>
    <btn>Search</btn>
  </empty-action>
</empty>
`,
  }),
});
</script>
