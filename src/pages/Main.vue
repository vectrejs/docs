<template>
  <main id="main-page">
    <header>
      <container grid="lg" class="text-center">
        <h1>
          <img :src="require('../img/logo.svg')" alt="vectre">
        </h1>
        <h2>
          A
          <u>Lightweight</u>,
          <u>Simple</u> and
          <u>Responsive</u> Component Framework
        </h2>
        <p>
          <a class="btn btn-lg" href="/docs/getting-started">Docs</a>
          &nbsp;
          <a class="btn btn-lg" href="https://github.com/vectrejs/vectre">GitHub</a>
        </p>
        <columns>
          <column col="4" xs="12">
            <card>
              <span slot="header">Lightweight</span>
              <div slot="body">30+ components less than 20KB (gzipped)</div>
            </card>
          </column>
          <column col="4" xs="12">
            <card>
              <span slot="header">Simple</span>
              <div slot="body">Easy to use in development, convenient to use on the page</div>
            </card>
          </column>
          <column col="4" xs="12">
            <card>
              <span slot="header">Responsive</span>
              <div slot="body">Flexbox-based, responsive and mobile-friendly layout</div>
            </card>
          </column>
        </columns>
      </container>
    </header>
    <section id="overview" class="text-center bg-dark">
      <h2>Overview</h2>
      <container grid="lg">
        <columns>
          <column col="10" sm="12" mx class="text-left">
            <p class="text-secondary">
              <strong>Vectre</strong> is a set of lightweight, simple and responsive Vue components based on Spectre.css 
            </p>
            <p class="text-secondary">
              Vectre has absorbed the best of both worlds. Clean, consistent design of Spectre and extensibility, flexibility of Vue will allow you to realize your ideas faster and easier.
            </p>
          </column>
          <column col="10" sm="12" mx>
            <a class="btn">Getting Started</a>
          </column>
        </columns>
      </container>
    </section>
    <footer>
      <container grid="lg">
        <p>
          <a href="/docs">Documentation</a>
          ·
          <a href="https://github.com/vectrejs/vectre">GitHub</a>
          ·
          <a href="https://twitter.com/vectrejs">Twitter</a>
          ·
          <span class="text-gray">Version 1.0.0</span>
        </p>
      </container>
    </footer>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss">
#main-page {
  header,
  section,
  footer {
    padding: 3rem 0;
  }

  header {
    h1 {
      img {
        max-width: 200px;
        min-width: 100px;
        width: auto;
        margin-left: -1.5rem;
      }
    }
    h2 {
      font-size: 0.9rem;
      margin: 1rem 0 1.2rem;
      line-height: 1.5rem;

      u {
        border-bottom: 0.1rem solid currentColor;
        padding-bottom: 0.05rem;
        text-decoration: none;
      }
    }

    p {
      margin-bottom: 3rem;
    }

    .btn {
      color: #fff;
      background: #303742;
      border-color: #303742;
    }

    .card {
      border: 0;

      &-header {
        font-weight: 700;
      }

      &-body {
        font-weight: lighter;
      }
    }
  }

  #overview {
    .column {
      padding: 1rem;
    }

    .btn {
      color: #303742;
      border-color: #303742;

      &:hover,
      &:active {
        background-color: #fff;
      }
    }
  }

  footer {
    a {
      color: #000;
    }
  }
}
</style>