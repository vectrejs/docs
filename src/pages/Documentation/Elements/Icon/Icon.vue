<template>
  <component-view>
    <h2 class="title">Icons</h2>
    <p>Icons are single-element, responsive and pure CSS icons</p>
    <prism language="html" code='<icon name="up">' />

    <h5 class="subtitle">Navigation icons</h5>

    <columns class="gal text-center">
      <column col="3" md="6">
        <icon name="up" />
        <p>up</p>
      </column>
      <column col="3" md="6">
        <icon name="right" />
        <p>right</p>
      </column>
      <column col="3" md="6">
        <icon name="down" />
        <p>down</p>
      </column>
      <column col="3" md="6">
        <icon name="left" />
        <p>left</p>
      </column>
      <column col="3" md="6">
        <icon name="upward" />
        <p>upward</p>
      </column>
      <column col="3" md="6">
        <icon name="forward" />
        <p>forward</p>
      </column>
      <column col="3" md="6">
        <icon name="downward" />
        <p>downward</p>
      </column>
      <column col="3" md="6">
        <icon name="back" />
        <p>back</p>
      </column>
      <column col="3" md="6">
        <icon name="back" />
        <p>back</p>
      </column>
      <column col="3" md="6">
        <icon name="caret" />
        <p>caret</p>
      </column>
      <column col="3" md="6">
        <icon name="menu" />
        <p>menu</p>
      </column>
      <column col="3" md="6">
        <icon name="apps" />
        <p>apps</p>
      </column>
      <column col="3" md="6">
        <icon name="hMore" />
        <p>hMore</p>
      </column>
      <column col="3" md="6">
        <icon name="vMore" />
        <p>vMore</p>
      </column>
    </columns>

    <h5 class="subtitle">Action icons</h5>
    <columns class="gal text-center">
      <column col="3" md="6">
        <icon name="hResize" />
        <p>hResize</p>
      </column>
      <column col="3" md="6">
        <icon name="vResize" />
        <p>vResize</p>
      </column>
      <column col="3" md="6">
        <icon name="plus" />
        <p>plus</p>
      </column>
      <column col="3" md="6">
        <icon name="minus" />
        <p>minus</p>
      </column>
      <column col="3" md="6">
        <icon name="cross" />
        <p>cross</p>
      </column>
      <column col="3" md="6">
        <icon name="check" />
        <p>check</p>
      </column>
      <column col="3" md="6">
        <icon name="stop" />
        <p>stop</p>
      </column>
      <column col="3" md="6">
        <icon name="shutdown" />
        <p>shutdown</p>
      </column>
      <column col="3" md="6">
        <icon name="refresh" />
        <p>refresh</p>
      </column>
      <column col="3" md="6">
        <icon name="search" />
        <p>search</p>
      </column>
      <column col="3" md="6">
        <icon name="flag" />
        <p>flag</p>
      </column>
      <column col="3" md="6">
        <icon name="bookmark" />
        <p>bookmark</p>
      </column>
      <column col="3" md="6">
        <icon name="edit" />
        <p>edit</p>
      </column>
      <column col="3" md="6">
        <icon name="delete" />
        <p>delete</p>
      </column>
      <column col="3" md="6">
        <icon name="share" />
        <p>share</p>
      </column>
      <column col="3" md="6">
        <icon name="download" />
        <p>download</p>
      </column>
      <column col="3" md="6">
        <icon name="upload" />
        <p>upload</p>
      </column>
    </columns>

    <h5 class="subtitle">Object icons</h5>
    <columns class="gal text-center">
      <column col="3" md="6">
        <icon name="mail" />
        <p>mail</p>
      </column>
      <column col="3" md="6">
        <icon name="people" />
        <p>people</p>
      </column>
      <column col="3" md="6">
        <icon name="message" />
        <p>message</p>
      </column>
      <column col="3" md="6">
        <icon name="photo" />
        <p>photo</p>
      </column>
      <column col="3" md="6">
        <icon name="time" />
        <p>time</p>
      </column>
      <column col="3" md="6">
        <icon name="location" />
        <p>location</p>
      </column>
      <column col="3" md="6">
        <icon name="link" />
        <p>link</p>
      </column>
      <column col="3" md="6">
        <icon name="emoji" />
        <p>emoji</p>
      </column>
    </columns>

    <h5 class="subtitle">Sizes</h5>
    <p>
      Use <kbd>size</kbd> prop to increase icon sizes. You can use predefined sizes (x2, x3, x4) or font-size to have
      different icon sizes.
    </p>

    <columns class="text-center">
      <column col="2" md="6">
        <icon name="mail" />
        <p>default</p>
      </column>
      <column col="2" md="6">
        <icon name="mail" size="x2" />
        <p>x2 (32px)</p>
      </column>
      <column col="2" md="6">
        <icon name="mail" size="x3" />
        <p>x3 (48px)</p>
      </column>
      <column col="2" md="6">
        <icon name="mail" size="x4" />
        <p>x4 (64px)</p>
      </column>
      <column col="2" md="6">
        <icon name="mail" size="4rem" />
        <p>custom</p>
      </column>
    </columns>
    <prism language="html" :code="sizesHtml" />
  </component-view>
</template>

<script lang="ts">
import Vue from 'vue';
import { props } from './props';

export default Vue.extend({
  name: 'IconPage',

  data: () => ({
    props,

    sizesHtml: `<icon name="mail" />
<icon name="mail" size="x2" />
<icon name="mail" size="x3" />
<icon name="mail" size="x4" />
<icon name="mail" size="4rem" />`,
  }),
});
</script>

<style lang="scss" scoped>
.gal .icon {
  margin: 1.5rem;
}
</style>
