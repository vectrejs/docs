<template>
  <component-view>
    <h2 class="title">Popovers</h2>
    <p>
      Popovers are small overlay content containers. Wrap elements by
      <code>popover</code> component. The first element will be shown the rest will be placed in the overlay
    </p>
    <popover side="right">
      <btn>Right</btn>
      <card>
        <card-header>
          <h4>Microsoft</h4>
        </card-header>
        <card-body>
          <span>Empower every person and every organization on the planet to achieve more.</span>
        </card-body>
        <card-footer>
          <a class="btn btn-primary" href="#cards">Do</a>
        </card-footer>
      </card>
    </popover>
    <popover>
      <btn>Top</btn>
      <card>
        <card-body>Top Popover</card-body>
      </card>
    </popover>
    <popover side="bottom">
      <btn>Bottom</btn>
      <card>
        <card-header>
          <h4>Microsoft</h4>
        </card-header>
        <card-body>
          <span>Empower every person and every organization on the planet to achieve more.</span>
        </card-body>
        <card-footer>
          <a class="btn btn-primary" href="#cards">Do</a>
        </card-footer>
      </card>
    </popover>
    <popover side="left">
      <btn>Left</btn>
      <card>
        <card-header>
          <h4>Microsoft</h4>
        </card-header>
        <card-body>
          <span>Empower every person and every organization on the planet to achieve more.</span>
        </card-body>
        <card-footer>
          <a class="btn btn-primary" href="#cards">Do</a>
        </card-footer>
      </card>
    </popover>
    <prism language="html" :code="code" />
  </component-view>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Popover, Btn, Card, CardHeader, CardBody, CardFooter } from '@vectrejs/vectre';
import { props } from './props';

export default defineComponent({
  name: 'PopoverPage',
  components: { Popover, Btn, Card, CardHeader, CardBody, CardFooter },
  data: () => ({
    props,
    code: `<popover>
  <btn>Top</btn>
  <card>
    <card-body>Top Popover</card-body>
  </card>
</popover>

<popover side="bottom">
  <btn>Bottom</btn>
  <card>...</card>
</popover>

<popover side="left">
  <btn>Left</btn>
  <card>...</card>
</popover>

<popover side="right">
  <btn>Right</btn>
  <card>...</card>
</popover>`,
  }),
});
</script>

<style lang="scss" scoped>
/deep/ .popover + .popover {
  margin-left: 0.4rem;
}
</style>
