<template>
  <component-view>
    <h2 class="title">Panels</h2>
    <p>Panels are flexible view container with auto-expand content section.</p>
    <columns>
      <column col="6" xl="6" sm="12">
        <Panel>
          <h5 slot="header">Recently Watched</h5>
          <Tile
            v-for="(tile, i) in tiles"
            slot="body"
            :key="i"
            :avatar="tile.avatar"
            :title="tile.title"
            :subtitle="tile.subtitle"
          />
          <btn slot="footer" size="block" type="primary">Hide</btn>
        </Panel>
      </column>
      <column col="6" sm="12">
        <Panel>
          <PanelHeader class="text-center">
            <Avatar size="lg" src="https://picturepan2.github.io/spectre/img/avatar-2.png" />
            <div class="panel-title h5 mt-10">Bruce Banner</div>
            <div class="panel-subtitle">THE HULK</div>
          </PanelHeader>
          <PanelNav>
            <Tabs current="Profile" block :items="['Profile', 'Files', 'Tasks']" />
          </PanelNav>
          <PanelBody>
            <Tile compact title="E-mail" subtitle="bruce.banner@hulk.com">
              <Btn slot="actions" v-tooltip.left="'Edit E-mail'" icon="edit" action type="link" />
            </Tile>
            <Tile compact title="Skype" subtitle="bruce.banner">
              <Btn slot="actions" v-tooltip.left="'Edit Skype'" icon="edit" action type="link" />
            </Tile>
            <Tile compact title="Location" subtitle="Dayton, Ohio">
              <Btn slot="actions" icon="edit" action type="link" />
            </Tile>
          </PanelBody>
          <PanelFooter>
            <Btn size="block">Save</Btn>
          </PanelFooter>
        </Panel>
      </column>
    </columns>
    <prism language="html" :code="html" />
    <prism language="javascript" :code="js" />
  </component-view>
</template>

<script lang="ts">
import Vue from 'vue';
import { slots } from './slots';

export default Vue.extend({
  name: 'PanelPage',

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
    html: `<Panel>
  <h5 slot="header">Recently Watched</h5>
  <Tile slot="body"
    v-for="(tile, i) in tiles"
    :key="i"
    :avatar="tile.avatar"
    :title="tile.title"
    :subtitle="tile.subtitle"
  />
  <Btn slot="footer" size="block" type="primary">Hide</Btn>
</Panel>

<!-- OR Composition -->

<Panel>

  <PanelHeader class="text-center">
    <Avatar size="lg" src="img/avatar-2.png" />
    <div class="panel-title h5 mt-10">Bruce Banner</div>
    <div class="panel-subtitle">THE HULK</div>
  </PanelHeader>

  <PanelNav>
    <Tabs current="Profile" block :items="['Profile', 'Files', 'Tasks']" />
  </PanelNav>

  <PanelBody>
    <Tile compact title="E-mail" subtitle="bruce.banner@hulk.com">
      <Btn slot="actions" v-tooltip.left="'Edit E-mail'" icon="edit" action type="link" />
    </Tile>
    <Tile compact title="Skype" subtitle="bruce.banner">
      <Btn slot="actions" v-tooltip.left="'Edit Skype'" icon="edit" action type="link" />
    </Tile>
    <Tile compact title="Location" subtitle="Dayton, Ohio">
      <Btn slot="actions" icon="edit" action type="link" />
    </Tile>
  </PanelBody>

  <PanelFooter>
    <Btn size="block">Save</Btn>
  </PanelFooter>

</Panel>
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
