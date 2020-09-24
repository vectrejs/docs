<template>
  <div>
    <h1 class="title">Installation</h1>
    <p>The framework supports several options for installation. Choose the one that suits your scenario.</p>

    <h3 class="pt-2">NPM or Yarn</h3>
    <p>
      Great for development using
      <a>webpack</a>,
      <a>rollup</a> bundlers with their own advantages.
    </p>
    <prism :code="npm" language="bash" />

    <h5 class="pt-2">Usage</h5>
    <prism :code="npmUsage" language="js" />

    <h5 class="pt-2">Tree shaking</h5>
    <p>Using separate components should reduce the size of the final bundle. Just import the components you want and the bundler should do the rest.</p>
    <prism :code="npmTree" language="js" />

    <h3 class="pt-2">
      CDN
      <sup>
        <small>
          <tag rounded type="primary">standalone</tag>
        </small>
      </sup>
    </h3>
    <p>It's easy to get started with CDN. It doesn't require anything other than import JavaScript and CSS file in your page:</p>
    <div>
      <b>UNPKG</b>
      <ul>
        <li>
          <b>Scripts</b> https://unpkg.com/@vectrejs/vectre/dist/vectre.min.js
        </li>
        <li>
          <b>Styles</b>
          <ul>
            <li>CSS: https://unpkg.com/spectre.css/dist/spectre.min.css</li>
            <li>Icons: https://unpkg.com/spectre.css/dist/spectre-icons.min.css</li>
            <li>Experemental: https://unpkg.com/spectre.css/dist/spectre-exp.min.css</li>
          </ul>
        </li>
      </ul>

      <b>jsDelivr</b>
      <ul>
        <li>
          <b>Scripts</b> https://cdn.jsdelivr.net/npm/@vectrejs/vectre/dist/vectre.min.js
        </li>
        <li>
          <b>Styles</b>
          <ul>
            <li>CSS: https://cdn.jsdelivr.net/npm/spectre.css/dist/spectre.min.css</li>
            <li>Icons: https://cdn.jsdelivr.net/npm/spectre.css/dist/spectre-icons.min.css</li>
            <li>Experemental: https://cdn.jsdelivr.net/npm/spectre.css/dist/spectre-exp.min.css</li>
          </ul>
        </li>
      </ul>
    </div>
    <h5>Usage</h5>
    <prism :code="cdn" language="html" />

    <h3 class="pt-2">Legacy Browsers</h3>
    <p>As mentioned above, there is a ready-made package with support of older browsers. You just have to import it in the same way as in the case of CDN:</p>

    <ul>
      <li>
        <b>jsDelivr</b> https://cdn.jsdelivr.net/npm/@vectrejs/vectre/dist/vectre.legacy.min.js
      </li>
      <li>
        <b>UNPKG</b> https://unpkg.com/@vectrejs/vectre/dist/vectre.legacy.min.js
      </li>
    </ul>

    <h3 class="pt-2">Name collision</h3>
    <p>Vectre is developed with the thought in mind about the minimum effort spent on development. Therefore, component names are as simple as possible and do not conflict with standard html5 tags. But there is always a chance that you might run into a name conflict.</p>
    <p>You can set a prefix to avoid conflict when using the plugin with all components.</p>
    <prism :code="npmConflict" language="js" />Or in the case of CDN
    <prism :code="cdnConflict" language="html" />
    <p>
      Now all components and directives are registered with the prefix. Result:
      <code>&lt;btn v-tooltip="'Click'" /&gt;</code> becomes
      <code>&lt;my-btn v-my-tooltip="'Click'" /&gt;</code>
    </p>
  </div>
</template>

<script>
import { cdn, cdnConflict } from './cdn';
export default {
  data: () => ({
    cdn,
    cdnConflict,
    npm: `npm install --save spectre.css @vectrejs/vectre
# OR
yarn add spectre.css @vectrejs/vectre
`,
    npmUsage: `import Vue from 'vue';
import 'spectre.css/dist/spectre-exp.css';
import 'spectre.css/dist/spectre-icons.css';
import 'spectre.css/dist/spectre.css';
import { VectrePlugin } from '@vectrejs/vectre';

Vue.use(VectrePlugin);`,
    npmTree: `import Vue from 'vue';
import 'spectre.css/dist/spectre.css';
import { Tag, Modal } from '@vectrejs/vectre';

Vue.component('Tag', Tag);
Vue.component('Modal', Modal);`,
    npmConflict: `import Vue from 'vue';
import { VectrePlugin } from '@vectrejs/vectre';

Vue.use(VectrePlugin, { prefix: 'my' });`,
  }),
};
</script>
