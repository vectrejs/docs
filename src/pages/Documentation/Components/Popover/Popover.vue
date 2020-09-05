<template>
  <component-view>
    <h2 class="title">Popovers</h2>
    <p>
      Popovers are small overlay content containers. Wrap elements by
      <code>popover</code> component. The first element
      will be shown the rest will be placed in the overlay
    </p>
    <Popover side="right">
      <Btn>Right</Btn>
      <Card>
        <CardHeader>
          <h4>Microsoft</h4>
        </CardHeader>
        <CardBody>
          <span>Empower every person and every organization on the planet to achieve more.</span>
        </CardBody>
        <CardFooter>
          <a class="btn btn-primary" href="#cards">Do</a>
        </CardFooter>
      </Card>
    </Popover>
    <Popover>
      <Btn>Top</Btn>
      <Card>
        <CardBody>Top Popover</CardBody>
      </Card>
    </Popover>
    <Popover side="bottom">
      <Btn>Bottom</Btn>
      <Card>
        <CardHeader>
          <h4>Microsoft</h4>
        </CardHeader>
        <CardBody>
          <span>Empower every person and every organization on the planet to achieve more.</span>
        </CardBody>
        <CardFooter>
          <a class="btn btn-primary" href="#cards">Do</a>
        </CardFooter>
      </Card>
    </Popover>
    <Popover side="left">
      <Btn>Left</Btn>
      <Card>
        <CardHeader>
          <h4>Microsoft</h4>
        </CardHeader>
        <CardBody>
          <span>Empower every person and every organization on the planet to achieve more.</span>
        </CardBody>
        <CardFooter>
          <a class="btn btn-primary" href="#cards">Do</a>
        </CardFooter>
      </Card>
    </Popover>
    <prism language="html" :code="code" />
  </component-view>
</template>
<script lang="ts">
import Vue from 'vue';
import { props } from './props';

export default Vue.extend({
  name: 'PopoverPage',

  data: () => ({
    props,
    code: `<Popover>
  <Btn>Top</Btn>
  <Card>
    <CardBody>Top Popover</CardBody>
  </Card>
</Popover>

<Popover side="bottom">
  <Btn>Bottom</Btn>
  <Card>...</Card>
</Popover>

<Popover side="left">
  <Btn>Left</Btn>
  <Card>...</Card>
</Popover>

<Popover side="right">
  <Btn>Right</Btn>
  <Card>...</Card>
</Popover>`,
  }),
});
</script>

<style lang="scss" scoped>
/deep/ .popover + .popover {
  margin-left: 0.4rem;
}
</style>
