<template>
  <component-view>
    <h2 class="title">Empty states</h2>
    <p>Empty states/blank slates are commonly used as placeholders for first time use, Empty data and error screens.</p>

    <columns>
      <column col="7" xs="12" mx>
        <Empty
          icon="mail"
          title="You have no new messages"
          sub="Click the button to start a conversation"
        >
          <btn slot="action">Send a message</btn>
        </Empty>
      </column>

      <column col="7" xs="12" mx>
        <Empty>
          <EmptyIcon icon="people" />
          <EmptyTitle>You are not following anyone</EmptyTitle>
          <EmptySubtitle>Start to meet new friends</EmptySubtitle>
          <EmptyAction>
            <Btn>Search</Btn>
          </EmptyAction>
        </Empty>
      </column>
    </columns>

    <prism language="html" :code="code" />
  </component-view>
</template>

<script lang="ts">
import Vue from 'vue';
import { props } from './props';
import { slots } from './slots';

export default Vue.extend({
  name: 'EmptyPage',

  data: () => ({
    props,
    slots,
    code: `<Empty
  icon="mail"
  title="You have no new messages"
  sub="Click the button to start a conversation"
>
  <btn slot="action">Send a message</btn>
</Empty>

<!-- Or with composition -->

<Empty>
  <EmptyIcon icon="people" />
  <EmptyTitle>You are not following anyone</EmptyTitle>
  <EmptySubtitle>Start to meet new friends</EmptySubtitle>
  <EmptyAction>
    <Btn>Search</Btn>
  </EmptyAction>
</Empty>
`,
  }),
});
</script>
