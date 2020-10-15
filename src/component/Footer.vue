<template>
  <footer>
    <container>
      <columns>
        <column col="10" md="12">
          <span class="footer-item">
            <a href="https://github.com/vectrejs/vectre">GitHub</a>
            &nbsp;·&nbsp;
          </span>

          <span class="footer-item">
            <a href="https://discord.gg/5a6Y8X2">Discord</a>
            ·
          </span>

          <span class="footer-item">
            <a href="https://twitter.com/vectrejs">Twitter</a>
            ·
          </span>

          <span class="text-grey footer-item">Version {{ version }}</span>
        </column>
      </columns>
    </container>
  </footer>
</template>

<script lang="ts">
import { Container, Columns, Column } from '@vectrejs/vectre';

export default {
  name: 'Footer',
  components: { Container, Columns, Column },
  data: (): Record<string, unknown> => ({ version: process.env.VUE_APP_VERSION }),
};
</script>

<style lang="scss">
footer {
  margin: 2rem 0 1rem;

  .columns div {
    margin: 0 0.1rem;
  }
}
</style>
