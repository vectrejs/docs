<template>
  <component-view>
    <h2 class="title">Navigation</h2>
    <p>Simple way to show navigation as a vertical hierarchical list</p>

    <h3 class="subtitle">Base use</h3>
    <Navigation :items="items" />
    <prism language="html" :code="baseHtml" />
    <prism language="js" :code="baseJs" />

    <p>
      <code>items</code> prop should have a certain structure to be used in a simplified way:
    </p>
    <pre>
Array of { 
  path: string,
  text: string,
  active?: boolean
} </pre>

    <h3 class="subtitle">Manual (Static)</h3>
    <Navigation>
      <NavigationItem>
        <a href="#">Layout</a>
        <Navigation>
          <NavigationItem>
            <a href="#">Flexbox Grid</a>
          </NavigationItem>
          <NavigationItem active>
            <a href="#">Navbar</a>
            <Navigation>
              <NavigationItem>
                <a href="#">Breadcrumb</a>
              </NavigationItem>
            </Navigation>
          </NavigationItem>
        </Navigation>
      </NavigationItem>
    </Navigation>
    <prism language="html" :code="manualHtml" />

    <h3 class="subtitle">Advanced</h3>
    <Navigation :items="items" level="1">
      <span slot-scope="{ item }">
        <Icon type="right" />
        {{ item.text }}
      </span>
    </Navigation>
    <prism language="html" :code="advancedHtml" />
    <p>
      <code>items</code> could be any iterable structure. In this case, you have to define how to display each item
      using default scoped slot.
    </p>
  </component-view>
</template>

<script lang="ts">
import Vue from 'vue';
import { slots } from './slots';
import { props } from './props';

export default Vue.extend({
  name: 'NavigationPage',

  data: () => ({
    slots,
    props,
    items: [
      { path: '#elements', text: 'Elements' },
      {
        path: '#layout',
        text: 'Layout',
        items: [
          { path: '#flex', text: 'Flexbox grid' },
          { path: '#responsive', active: true, text: 'Responsive' },
          {
            path: '#navbar',
            text: 'Navbar',
            items: [{ path: '#menu', text: 'Menu' }],
          },
        ],
      },
      { path: '#components', text: 'Components' },
    ],
    baseHtml: '<Navigation :items="items" />',
    baseJs: `export default {
  data: () => ({
    items: [
      { path: '#elements', text: 'Elements' },
      { path: '#layout', text: 'Layout', items: [
        { path: '#flex', text: 'Flexbox grid' },
        { path: '#responsive', active: true, text: 'Responsive' },
        { path: '#navbar', text: 'Navbar', items: [
          { path: '#menu', text: 'Menu' }
        ]},
      ]},
      { path: '#components', text: 'Components' }
    ],
  })
}`,
    manualHtml: `<Navigation>
  <NavigationItem>
    <a href="#">Layout</a>
    <Navigation>
      <NavigationItem>
        <a href="#">Flexbox Grid</a>
      </NavigationItem>
      <NavigationItem active>
        <a href="#">Navbar</a>
        <Navigation>
          <NavigationItem>
            <a href="#">Breadcrumb</a>
          </NavigationItem>
        </Navigation>
      </NavigationItem>
    </Navigation>
  </NavigationItem>
</Navigation>`,
    advancedHtml: `<Navigation :items="items" level="1">
  <span slot-scope="{item, index}">
    <Icon type="right"/>
    {{ item.text }}
  </span>
</Navigation>`,
  }),
});
</script>
