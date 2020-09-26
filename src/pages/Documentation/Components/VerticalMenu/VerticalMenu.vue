<template>
  <component-view>
    <h2 class="title">Vertical Menu</h2>
    <p>Vertical menu is a list of links for navigation.</p>

    <h3 class="subtitle">Base use</h3>
    <columns>
      <column col="4" md="12">
        <vertical-menu
          :items="[
            { divider: 'LINKS' },
            { path: '#', text: 'Slack', badge: 'new' },
            { divider: true },
            { path: '#hipchat', text: 'Hipchat' },
            { path: '#skype', text: 'Skype' },
          ]"
          active="3"
        />
      </column>
    </columns>
    <prism language="html" :code="basic" />
    <p><code>items</code> prop should have a certain structure to be used in a simplified way:</p>
    <pre>
Array of { 
  path: string, 
  text: string, 
  badge?: string | number, 
  divider?: string|boolean 
}</pre
    >
    <i>Note: dividers can not be active but they are used in index count</i>

    <h3 class="subtitle">Manual (Static)</h3>
    <columns>
      <column col="4" md="12">
        <vertical-menu>
          <tile compact avatar="https://picturepan2.github.io/spectre/img/avatar-1.png" title="<b>John Smith</b>" />
          <vertical-menu-divider />
          <vertical-menu-item>
            <router-link to="#">Slack</router-link>
            <vertical-menu-item-badge>new!</vertical-menu-item-badge>
          </vertical-menu-item>
          <vertical-menu-divider text="MESSAGING" />
          <vertical-menu-item>
            <router-link to="#hipchat">Hipchat</router-link>
            <vertical-menu-item-badge type="error">depricated</vertical-menu-item-badge>
          </vertical-menu-item>
          <vertical-menu-item>
            <router-link to="#skypw" class="active">Skype</router-link>
          </vertical-menu-item>
        </vertical-menu>
      </column>
    </columns>
    <prism language="html" :code="manual" />

    <h3 class="subtitle">Advanced</h3>
    <p>
      <code>items</code> could be any iterable structure. In this case, you must define how to display each item using
      default scoped slot.
    </p>

    <columns>
      <column col="4" sm="12">
        <vertical-menu
          :items="{
            people: { icon: 'people', path: '#people', text: 'Contacts', badge: 2 },
            mail: { icon: 'mail', path: '#hipchat', text: 'Mails' },
            message: { icon: 'message', path: '#message', text: 'Messages' },
          }"
        >
          <vertical-menu-item slot-scope="{ item, index }">
            <router-link :to="item.path" :class="index == 'message' ? 'active' : null">
              <icon :name="item.icon" />
              {{ item.text }}
              <vertical-menu-item-badge v-if="item.badge" :value="item.badge" />
            </router-link>
          </vertical-menu-item>
        </vertical-menu>
      </column>
    </columns>
    <prism language="html" :code="advanced" />
    <p>
      <i>Note: active and badge properties are ignored. You have to define them by yourself.</i>
    </p>
  </component-view>
</template>

<script lang="ts">
import Vue from 'vue';
import { props } from './props';
import { slots } from './slots';

export default Vue.extend({
  name: 'VerticalMenuPage',

  data: () => ({
    props,
    slots,
    basic: `<vertical-menu :items="[
    { divider: 'LINKS' },
    { path: '#', text: 'Slack', badge: 'new' },
    { divider: true },
    { path: '#hipchat', text: 'Hipchat' },
    { path: '#skype', text: 'Skype' },
  ]"
  active="3"
/>`,
    manual: `<vertical-menu>
  <tile
    compact
    avatar="https://picturepan2.github.io/spectre/img/avatar-1.png"
    title="<b>John Smith</b>"
  />
  <vertical-menu-divider />
  <vertical-menu-item>
    <router-link to="#">Slack</router-link>
    <vertical-menu-item-badge>new!</vertical-menu-item-badge>
  </vertical-menu-item>
  <vertical-menu-divider text="MESSAGING" />
  <vertical-menu-item>
    <router-link to="#hipchat">Hipchat</router-link>
    <vertical-menu-item-badge type="error">depricated</vertical-menu-item-badge>
  </vertical-menu-item>
  <vertical-menu-item>
    <router-link to="#skypw" class="active">Skype</router-link>
  </vertical-menu-item>
</vertical-menu>`,
    advanced: `<vertical-menu
  :items="{
    people: { icon: 'people', path: '#people', text: 'Contacts', badge: 2 },
    mail: { icon: 'mail', path: '#hipchat', text: 'Mails' },
    message: { icon: 'message', path: '#message', text: 'Messages' },
  }"
>
  <vertical-menu-item slot-scope="{ item, index }">
    <router-link :to="item.path" :class="index == 'message' ? 'active' : null">
      <icon :name="item.icon" />
      {{ item.text }}
      <vertical-menu-item-badge v-if="item.badge" :value="item.badge" />
    </router-link>
  </vertical-menu-item>
</vertical-menu>`,
  }),
});
</script>
