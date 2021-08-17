<template>
  <component-view>
    <h2 class="title">Panels</h2>
    <p>Panels are flexible view container with auto-expand content section.</p>
    <columns>
      <column col="6" xl="6" sm="12">
        <panel>
          <template #header>
            <h5>Recently Watched</h5>
          </template>
          <template #body>
            <tile
              v-for="(tile, i) in tiles"
              :key="i"
              :avatar="tile.avatar"
              :title="tile.title"
              :subtitle="tile.subtitle"
            />
          </template>
          <template #footer>
            <btn size="block" type="primary">Hide</btn>
          </template>
        </panel>
      </column>
      <column col="6" sm="12">
        <panel>
          <panel-header class="text-center">
            <avatar size="lg" src="https://picturepan2.github.io/spectre/img/avatar-2.png" />
            <div class="panel-title h5 mt-10">Bruce Banner</div>
            <div class="panel-subtitle">THE HULK</div>
          </panel-header>
          <panel-nav>
            <tabs current="Profile" block :items="['Profile', 'Files', 'Tasks']" />
          </panel-nav>
          <panel-body>
            <tile compact title="E-mail" subtitle="bruce.banner@hulk.com">
              <btn slot="actions" v-tooltip.left="'Edit E-mail'" icon="edit" action type="link" />
            </tile>
            <tile compact title="Skype" subtitle="bruce.banner">
              <btn slot="actions" v-tooltip.left="'Edit Skype'" icon="edit" action type="link" />
            </tile>
            <tile compact title="Location" subtitle="Dayton, Ohio">
              <btn slot="actions" icon="edit" action type="link" />
            </tile>
          </panel-body>
          <panel-footer>
            <btn size="block">Save</btn>
          </panel-footer>
        </panel>
      </column>
    </columns>
    <prism language="html" :code="html" />
    <prism language="javascript" :code="js" />
  </component-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  Avatar,
  Tile,
  Btn,
  Column,
  Columns,
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
  PanelNav,
  Tooltip,
} from '@vectrejs/vectre';
import { slots } from './slots';

export default defineComponent({
  name: 'PanelPage',
  directives: { Tooltip },
  components: { Avatar, Tile, Btn, Column, Columns, Panel, PanelHeader, PanelBody, PanelFooter, PanelNav },
  data: () => ({
    slots,
    tiles: [
      {
        avatar: 'https://picturepan2.github.io/spectre/img/avatar-1.png',
        title: 'Academy Awards',
        subtitle:
          'A set of 25 awards for artistic and technical merit in the American film industry, given annually by the Academy of Motion Picture Arts and Sciences (AMPAS)...',
      },
      {
        avatar: 'https://picturepan2.github.io/spectre/img/avatar-2.png',
        title: 'Avengers: Infinity War',
        subtitle:
          'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos ...',
      },
      {
        avatar: 'https://picturepan2.github.io/spectre/img/avatar-3.png',
        title: 'X-Men',
        subtitle:
          'Two mutants come to a private academy for their kind whose resident superhero team must oppose a terrorist organization with similar powers.',
      },
    ],
    html: `<panel>
  <template #header>
    <h5>Recently Watched</h5>
  </template>
  <template #body>
    <tile
      v-for="(tile, i) in tiles"
      :key="i"
      :avatar="tile.avatar"
      :title="tile.title"
      :subtitle="tile.subtitle"
    />
  </template>
  <template #footer>
    <btn size="block" type="primary">Hide</btn>
  </template>
</panel>

<!-- OR Composition -->

<panel>

  <panel-header class="text-center">
    <avatar size="lg" src="img/avatar-2.png" />
    <div class="panel-title h5 mt-10">Bruce Banner</div>
    <div class="panel-subtitle">THE HULK</div>
  </panel-header>

  <panel-nav>
    <tabs current="Profile" block :items="['Profile', 'Files', 'Tasks']" />
  </panel-nav>

  <panel-body>
    <tile compact title="E-mail" subtitle="bruce.banner@hulk.com">
      <btn slot="actions" v-tooltip.left="'Edit E-mail'" icon="edit" action type="link" />
    </tile>
    <tile compact title="Skype" subtitle="bruce.banner">
      <btn slot="actions" v-tooltip.left="'Edit Skype'" icon="edit" action type="link" />
    </tile>
    <tile compact title="Location" subtitle="Dayton, Ohio">
      <btn slot="actions" icon="edit" action type="link" />
    </tile>
  </panel-body>

  <panel-footer>
    <btn size="block">Save</btn>
  </panel-footer>

</panel>
`,
    js: `export default {
  data: () => ({
    tiles: [
      {
        avatar: 'img/avatar-1.png',
        title: 'Academy Awards',
        subtitle: 'A set of 25 awards for ...'
      },
      {
        avatar: 'img/avatar-2.png',
        title: 'Avengers',
        subtitle: 'The Avengers and their allies must ...'
      },
      {
        avatar: 'img/avatar-3.png',
        title: 'X-Men',
        subtitle: 'Two mutants come ...' },
    ]
  }),
}`,
  }),
});
</script>

<style scoped>
@media (min-height: 560px) {
  .panel {
    height: 55vh;
  }
}

.panel-body .tile {
  margin: 0.75rem 0;
}
</style>
