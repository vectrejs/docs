<template>
  <component-view>
    <h2 class="title">Click Outside</h2>
    <p>
      Sometimes we need to know that the user has clicked on an element outside of our scope. For this purpose, you can
      add <kbd>v-click-outside</kbd> directive to an element with specified click callback.
    </p>
    <columns>
      <column col="6" lg="12" mx>
        <card v-click-outside="() => (clicked = 'outside')" @click="() => (clicked = 'inside')">
          <card-header class="text-center">
            <div class="h1">{{ (clicked && `Clicked ${clicked}`) || 'Click Me' }}</div>
          </card-header>
        </card>
      </column>
    </columns>

    <prism language="html" :code="clickOutsideHtml" />
    <prism language="js" :code="clickOutsideJs" />

    <h3 class="subtitle">Touchscreen</h3>
    <p>Using the <code>touch</code> modifier will allow you to track touches</p>

    <columns>
      <column col="6" lg="12" mx>
        <card v-click-outside.touch="() => (touched = 'outside')" @touchstart="() => (touched = 'inside')">
          <card-header class="text-center">
            <div class="h1">
              {{ (touched && `Touched/slid ${touched}`) || 'Untouched' }}
            </div>
          </card-header>
        </card>
      </column>
    </columns>

    <prism language="html" :code="touchOutsideHtml" />
    <prism language="js" :code="touchOutsideJs" />
  </component-view>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ClickOutsidePage',
  data: function () {
    return {
      clicked: undefined,
      touched: undefined,
      clickOutsideHtml: `<card 
  v-click-outside="() => (clicked = 'outside')" 
  @click="() => (clicked = 'inside')"
>
  <card-header>
    {{ (clicked && \`Clicked \${clicked}\`) || 'Click Me' }}
  </card-header>
</card>`,
      clickOutsideJs: `export default {
  data: () => ({
    clicked: undefined,
  }),
}`,
      touchOutsideHtml: `<card 
  v-click-outside.touch="() => (touched = 'outside')" 
  @click="() => (touched = 'inside')"
>
  <card-header>
    {{ (touched && \`Touched/slid \${touched}\`) || 'Untouched' }}
  </card-header>
</card>`,
      touchOutsideJs: `export default {
  data: () => ({
    touched: undefined,
  }),
}`,
    };
  },
});
</script>
