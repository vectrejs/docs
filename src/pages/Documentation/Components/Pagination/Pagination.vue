<template>
  <component-view>
    <h2 class="title">Pagination</h2>
    <h3 class="subtitle">Classic</h3>
    <pagination v-model="current" :pages="20" :show="6" />
    <prism language="html" :code="basicHtml" />
    <prism language="javascript" :code="basicJs" />

    <h3 class="subtitle">Simple</h3>
    <p>You could use previous and next pagination to navigate.</p>
    <pagination v-model="page" :pages="pages" />
    <prism language="html" :code="simpleHtml" />
    <prism language="javascript" :code="simpleJs" />
  </component-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Pagination } from '@vectrejs/vectre';
import { props } from './props';
import { events } from './events';

export default defineComponent({
  name: 'PaginationPage',
  components: { Pagination },
  data: () => ({
    props,
    events,
    current: 1,
    pages: ['Accordion', 'Avatar', 'Bar', 'Breadcrumb', 'Cards', 'Chips'],
    page: 'Accordion',
    basicHtml: '<pagination v-model="current" :pages="20" :show="6" />',
    basicJs: `export default {
  data: () => ({
    current: 1,
  })
}`,
    simpleHtml: '<pagination v-model="current" :pages="pages" />',
    simpleJs: `export default {
  data: () => ({
    pages: ['Accordion', 'Avatar', 'Bar', 'Breadcrumb', 'Cards', 'Chips'],
    current: 'Accordion',
  })
}`,
  }),
});
</script>
