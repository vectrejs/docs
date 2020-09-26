<template>
  <component-view>
    <h2 class="title">Dropdown Menu</h2>
    <p>The dropdown is a combination of button and menu.</p>

    <h3 class="subtitle">Base use</h3>
    <dropdown-menu
      btn-text="Click"
      :items="[
        { path: '#', text: 'Slack' },
        { path: '#hipchat', text: 'Hipchat' },
        { path: '#skype', text: 'Skype' },
      ]"
    />
    <prism language="html" :code="base" />

    <h3 class="subtitle">Advanced use</h3>
    <p>As in the case of the menu, you can specify how to display the menu items</p>
    <dropdown-menu
      btn-text="Menu"
      btn-type="primary"
      btn-icon="menu"
      :items="{
        people: { icon: 'people', path: '#people', text: 'Contacts', badge: 2 },
        mail: { icon: 'mail', path: '#hipchat', text: 'Mails' },
        message: { icon: 'message', path: '#message', text: 'Messages' },
      }"
    >
      <router-link slot-scope="{ item }" :to="item.path">
        <vertical-menu-item-badge v-if="item.badge" type="primary">{{ item.badge }}</vertical-menu-item-badge>
        <icon :name="item.icon" />
        {{ item.text }}
      </router-link>
    </dropdown-menu>
    <prism language="html" :code="advanced" />
  </component-view>
</template>

<script lang="js">
import Vue from 'vue';
import { events } from './events';
import { props } from './props';

export default Vue.extend({
  name: 'DropdownMenuPage',

  data: () => ({
    events,
    props,
    base: `<dropdown-menu
  btn-text="Click"
  :items="[
    { path: '#', text: 'Slack' },
    { path: '#hipchat', text: 'Hipchat' },
    { path: '#skype', text: 'Skype' },
  ]"
/>`,
    advanced: `<dropdown-menu
  text="Menu"
  type="primary"
  icon="menu"
  :items="{
    people: { icon: 'people', path: '#people', text: 'Contacts', badge: 2 },
    mail: { icon: 'mail', path: '#hipchat', text: 'Mails' },
    message: { icon: 'message', path: '#message', text: 'Messages' },
  }"
>
  <router-link slot-scope="{ item }" :to="item.path">
    <vertical-menu-item-badge v-if="item.badge" type="primary">{{ item.badge }}</vertical-menu-item-badge>
    <icon :name="item.icon" />
    {{ item.text }}
  </router-link>
</dropdown-menu>`,
  }),
});
</script>
