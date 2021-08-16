<template>
  <component-view>
    <h2 class="title">Tags</h2>
    <p>Tags are formatted text tags for highlighted, informative information.</p>

    <tag>default</tag>
    <tag type="primary">primary</tag>
    <tag type="secondary">secondary</tag>
    <tag type="warning">warning</tag>
    <tag type="success">success</tag>
    <tag type="error">error</tag>
    <prism language="html" :code="basicHtml" />

    <h5 class="subtitle">Rounded tag</h5>
    <p>
      Just add
      <kbd>rounded</kbd> prop to make a tag rounded
    </p>
    <tag rounded>default</tag>
    <tag type="primary" rounded>primary</tag>
    <prism language="html" :code="roundedHtml" />
  </component-view>
</template>

<script lang="ts">
import { Tag } from '@vectrejs/vectre';
import { defineComponent } from 'vue';
import { props } from './props';

export default defineComponent({
  name: 'TagPage',
  components: { Tag },
  data: () => ({
    props,

    basicHtml: `<tag>default</tag>
<tag type="primary">primary</tag>
<tag type="secondary">secondary</tag>
<tag type="warning">warning</tag>
<tag type="success">success</tag>
<tag type="error">error</tag>`,

    roundedHtml: `<tag rounded>default</tag>
<tag type="primary" rounded>primary</tag>`,
  }),
});
</script>
