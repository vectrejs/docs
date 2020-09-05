<template>
  <component-view>
    <h2 class="title">Tiles</h2>
    <p>Tiles are repeatable or embeddable information blocks.</p>

    <h3 class="subtitle">Basic usage</h3>
    <columns>
      <column col="8" xl="9" sm="12">
        <Tile
          icon="people"
          title="Academy Awards"
          subtitle="A set of 25 awards for artistic and technical merit in the American film industry, given annually by the Academy of Motion Picture Arts and Sciences (AMPAS)..."
        />
      </column>
      <column col="8" xl="9" sm="12">
        <Tile
          avatar="https://picturepan2.github.io/spectre/img/avatar-1.png"
          title="Avengers: Infinity War"
          subtitle="The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos ..."
        >
          <template slot="actions">
            <Btn type="primary">Watch</Btn>
            <Btn>Skip</Btn>
          </template>
        </Tile>
      </column>
      <column col="8" xl="9" sm="12">
        <Tile>
          <TileIcon initials="XM" />
          <TileContent>
            <TileTitle>X-Men</TileTitle>
            <TileSubtitle>Two mutants come to a private academy for their kind whose resident superhero team must oppose a terrorist organization with similar powers.</TileSubtitle>
            <Btn type="primary">Watch</Btn>
            <Btn>Skip</Btn>
          </TileContent>
        </Tile>
      </column>
    </columns>
    <prism language="html" :code="baseHtml" />

    <h3 class="subtitle">Compact</h3>
    <p>Compact version of Tiles component</p>
    <columns>
      <column col="5" md="8" sm="12">
        <Tile compact initials="L" title="Logan" subtitle="Offline · Last seen: 3 March 2017">
          <DropdownMenu
            slot="actions"
            right
            btn-icon="icon-more-vert"
            btn-type="link"
            :items="[{ text: 'Call' }]"
          />
        </Tile>
      </column>
    </columns>
    <prism language="html" :code="compactHtml" />
  </component-view>
</template>

<script lang="ts">
import Vue from 'vue';
import { slots } from './slots';
import { props } from './props';

export default Vue.extend({
  name: 'TilePage',

  data: () => ({
    props,
    slots,
    baseHtml: `<Tile
  icon="people"
  title="Academy Awards"
  subtitle="A set of 25 awards for artistic..."
/>

<Tile
  avatar="img/avatar-1.png"
  title="Avengers: Infinity War"
  subtitle="The Avengers and their allies must be willing..."
>
  <template slot="actions">
    <Btn type="primary">Watch</Btn>
    <Btn>Skip</Btn>
  </template>
</Tile>

<!-- OR Composition -->

<Tile>
  <TileIcon initials="XM" />
  <TileContent>
    <TileTitle>X-Men</TileTitle>
    <TileSubtitle>Two mutants come to a private academy fo...</TileSubtitle>
    <Btn type="primary">Watch</Btn>
    <Btn>Skip</Btn>
  </TileContent>
</Tile>`,
    compactHtml: `<Tile compact
  initials="L"
  title="Logan"
  subtitle="Offline · Last seen: 3 March 2017"
>
  <DropdownMenu right
    slot="actions"
    btn-icon="icon-more-vert"
    btn-type="link"
    :items="[{text: 'Call'}]" />
</Tile>`,
  }),
});
</script>
