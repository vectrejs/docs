<template>
  <component-view>
    <h2 class="title">Cards</h2>
    <p>
      Cards are flexible content containers.
      <code>&lt;Card/&gt;</code>,
      <code>&lt;CardHeader/&gt;</code>,
      <code>&lt;CardBody/&gt;</code>,
      <code>&lt;CardFooter/&gt;</code> and
      <code>&lt;CardImage/&gt;</code>
      are available for composing
    </p>
    <columns>
      <column col="6" xs="12" xl="6" lg="6">
        <Card>
          <CardImage img="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg" />
          <CardHeader>
            <h4>Microsoft</h4>
            <div class="text-gray">Hardware and software</div>
          </CardHeader>
          <CardBody>Empower every person and every organization on the planet to achieve more.</CardBody>
          <CardFooter>
            <Btn type="primary">Details</Btn>
          </CardFooter>
        </Card>
      </column>

      <column col="6" xs="12" xl="6" lg="6">
        <Card>
          <CardHeader>
            <h4>Microsoft</h4>
            <div class="text-gray">Hardware and software</div>
          </CardHeader>
          <CardBody>Empower every person and every organization on the planet to achieve more.</CardBody>
          <CardFooter>
            <Btn type="primary">Details</Btn>
          </CardFooter>
          <CardImage img="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg" />
        </Card>
      </column>

      <column col="6" xs="12" xl="6" lg="6">
        <Card>
          <CardHeader>
            <h4>Microsoft</h4>
            <div class="text-gray">Hardware and software</div>
          </CardHeader>
          <CardImage img="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg" />
          <CardBody>
            <span>Empower every person and every organization on the planet to achieve more.</span>
          </CardBody>
          <CardFooter>
            <Btn type="primary">Details</Btn>
          </CardFooter>
        </Card>
      </column>
    </columns>

    <prism language="html" :code="code" />
  </component-view>
</template>

<script lang="ts">
import Vue from 'vue';
import { props } from './props';

export default Vue.extend({
  name: 'CardPage',

  data: () => ({
    props,
    code: `<Card>
  <CardImage img="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg" />
  <CardHeader>
    <h4>Microsoft</h4>
    <div class="text-gray">Hardware and software</div>
  </CardHeader>
  <CardBody>Empower every person and every organization on the planet to achieve more.</CardBody>
  <CardFooter>
    <Btn type="primary">Details</Btn>
  </CardFooter>
</Card>

<Card>
  <CardHeader>
    <h4>Microsoft</h4>
    <div class="text-gray">Hardware and software</div>
  </CardHeader>
  <CardBody>Empower every person and every organization on the planet to achieve more.</CardBody>
  <CardFooter>
    <Btn type="primary">Details</Btn>
  </CardFooter>
  <CardImage img="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg" />
</Card>

<Card>
  <CardHeader>
    <h4>Microsoft</h4>
    <div class="text-gray">Hardware and software</div>
  </CardHeader>
  <CardImage img="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg" />
  <CardBody>
    <span>Empower every person and every organization on the planet to achieve more.</span>
  </CardBody>
  <CardFooter>
    <Btn type="primary">Details</Btn>
  </CardFooter>
</Card>
`,
  }),
});
</script>
