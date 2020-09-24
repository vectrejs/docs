<template>
  <div>
    <h1 class="title">Introduction</h1>
    <p class="pt-2">
      Vectre is a component framework made on top of two well known frameworks
      <a href="https://vuejs.org/" title="Go to official site" target="_blank">Vue.js</a> and
      <a href="https://picturepan2.github.io/spectre/index.html" title="Go to official site" target="_blank">
        Spectre CSS</a
      >. It allows you to quickly start prototyping your solution or add interactivity to an existing project based on
      Specter CSS.
    </p>

    <h4>Core principles</h4>
    <p>In trying to find the best performance ratio, Vectre follows a few core principles:</p>
    <dl>
      <dt>"Ease of use"</dt>
      <dd>
        One of the motivations is to make development easy with no extra effort, without additional build steps, complex
        compositions and so on. Just take the data and give it to the Vectre components.
      </dd>

      <dt>"Simplicity balances complexity"</dt>
      <dd>
        You can see that most of the use cases have already been implemented but it is still possible to customize the
        components as you see fit.
      </dd>

      <dt>"Size matters"</dt>
      <dd>
        Vectre continued the Spectre CSS philosophy to remain lightweigth without compromising quality. The current
        implementation is about
        <b>13kb</b> (compressed) which allows for uncompromising application sizes of only about <b>60kb</b>. In
        addition, the framework has tree shaking out of the box which can make your final bundle even smaller.
      </dd>

      <dt>"Optimization out of the box"</dt>
      <dd>
        Most of the components are implemented as
        <a
          href="https://vuejs.org/v2/guide/render-function.html#Functional-Components"
          target="_blank"
          title="Go to documentation"
        >
          functional</a
        >, this gives an additional performance boost. A number of technical solutions made it possible to get rid of
        parts that had the least value but brought a decrease in performance.
      </dd>

      <dt>"System reliability"</dt>
      <dd>
        Using a couple of
        <a href="https://www.typescriptlang.org/" title="Go to official site" target="_blank">Typescript</a> and
        <a
          href="https://github.com/wonderful-panda/vue-tsx-support/blob/v2/README.md"
          title="Go to documentation"
          target="_blank"
        >
          TSX</a
        >
        under the hood provides additional reliability. You can be sure everything is in place and you get all the
        benefits of strict typing.
      </dd>
    </dl>
    <h4 class="pt-2">Browser Support</h4>
    <p>
      At present, Vectre supports all modern browsers and additionally has a build to support older browsers like IE 10
      or Safari 9
    </p>
    <div>
      <img :src="require('../../../img/browsers.png')" class="img-responsive" style="max-height: 100px" />
    </div>
  </div>
</template>

<script>
export default {};
</script>
