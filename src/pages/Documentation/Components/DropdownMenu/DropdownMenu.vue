<template>
  <component-view>
    <h2 class="title">DropdownMenu</h2>
    <p>The dropdown is a combination of button and menu.</p>

    <h3 class="subtitle">Base use</h3>
    <DropdownMenu
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
    <DropdownMenu
      btn-text="Menu"
      btn-type="primary"
      btn-icon="menu"
      :items="{
        people: { icon: 'people', path: '#people', text: 'Contacts', badge: 2 },
        mail: { icon: 'mail', path: '#hipchat', text: 'Mails' },
        message: { icon: 'message', path: '#message', text: 'Messages' },
      }"
    >
      <RouterLink slot-scope="{ item }" :to="item.path">
        <VerticalMenuItemBadge v-if="item.badge" type="primary">{{ item.badge }}</VerticalMenuItemBadge>
        <Icon :type="item.icon" />
        {{ item.text }}
      </RouterLink>
    </DropdownMenu>
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
    base: `<DropdownMenu
  btn-text="Click"

  :items="[
    { path: '#', text: 'Slack' },
    { path: '#hipchat', text: 'Hipchat' },
    { path: '#skype', text: 'Skype' },
  ]"
/>`,
    advanced: `<DropdownMenu
  text="Menu"
  type="primary"
  icon="menu"
  :items="{
    people: { icon: 'people', path: '#people', text: 'Contacts', badge: 2 },
    mail: { icon: 'mail', path: '#hipchat', text: 'Mails' },
    message: { icon: 'message', path: '#message', text: 'Messages' },
  }"
>
  <RouterLink slot-scope="{ item }" :to="item.path">
    <VerticalMenuItemBadge v-if="item.badge" type="primary">{{ item.badge }}</VerticalMenuItemBadge>
    <Icon :type="item.icon" />
    {{ item.text }}
  </RouterLink>
</DropdownMenu>`,
  }),
});
</script>
