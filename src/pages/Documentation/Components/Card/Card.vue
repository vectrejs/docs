<template>
  <component-view>
    <h2 class="title">Cards</h2>
    <p>
      Cards are flexible content containers.
      <code>&lt;card/&gt;</code>, <code>&lt;card-header/&gt;</code>, <code>&lt;card-body/&gt;</code>,
      <code>&lt;card-footer/&gt;</code> and
      <code>&lt;card-image/&gt;</code>
      are available for composing
    </p>
    <columns>
      <column col="6" xs="12" xl="6" lg="6">
        <card>
          <card-image img="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg" />
          <card-header>
            <h4>Microsoft</h4>
            <div class="text-gray">Hardware and software</div>
          </card-header>
          <card-body>Empower every person and every organization on the planet to achieve more.</card-body>
          <card-footer>
            <btn type="primary">Details</btn>
          </card-footer>
        </card>
      </column>

      <column col="6" xs="12" xl="6" lg="6">
        <card>
          <card-header>
            <h4>Microsoft</h4>
            <div class="text-gray">Hardware and software</div>
          </card-header>
          <card-body>Empower every person and every organization on the planet to achieve more.</card-body>
          <card-footer>
            <btn type="primary">Details</btn>
          </card-footer>
          <card-image img="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg" />
        </card>
      </column>

      <column col="6" xs="12" xl="6" lg="6">
        <card>
          <card-header>
            <h4>Microsoft</h4>
            <div class="text-gray">Hardware and software</div>
          </card-header>
          <card-image img="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg" />
          <card-body>
            <span>Empower every person and every organization on the planet to achieve more.</span>
          </card-body>
          <card-footer>
            <btn type="primary">Details</btn>
          </card-footer>
        </card>
      </column>
    </columns>

    <prism language="html" :code="code" />
  </component-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Btn, Column, Columns, Card, CardBody, CardFooter, CardHeader, CardImage } from '@vectrejs/vectre';
import { props } from './props';

export default defineComponent({
  name: 'CardPage',
  components: { Btn, Column, Columns, Card, CardBody, CardFooter, CardHeader, CardImage },
  data: () => ({
    props,
    code: `<card>
  <card-image img="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg" />
  <card-header>
    <h4>Microsoft</h4>
    <div class="text-gray">Hardware and software</div>
  </card-header>
  <card-body>Empower every person and every organization on the planet to achieve more.</card-body>
  <card-footer>
    <btn type="primary">Details</btn>
  </card-footer>
</card>

<card>
  <card-header>
    <h4>Microsoft</h4>
    <div class="text-gray">Hardware and software</div>
  </card-header>
  <card-body>Empower every person and every organization on the planet to achieve more.</card-body>
  <card-footer>
    <btn type="primary">Details</btn>
  </card-footer>
  <card-image img="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg" />
</card>

<card>
  <card-header>
    <h4>Microsoft</h4>
    <div class="text-gray">Hardware and software</div>
  </card-header>
  <card-image img="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg" />
  <card-body>
    <span>Empower every person and every organization on the planet to achieve more.</span>
  </card-body>
  <card-footer>
    <btn type="primary">Details</btn>
  </card-footer>
</card>
`,
  }),
});
</script>
