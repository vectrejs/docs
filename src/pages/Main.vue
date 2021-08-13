<template>
  <main id="main-page">
    <header>
      <container grid="lg" class="text-center">
        <h1>
          <img :src="require('../img/logo.svg')" alt="VectreJS" />
        </h1>
        <h2>
          A
          <u>Lightweight</u>, <u>Simple</u> and <u>Responsive</u> Component Framework
        </h2>
        <p>
          <router-link class="btn btn-lg" to="/pages/getting-started">Docs</router-link>&nbsp;
          <a class="btn btn-lg" href="https://github.com/vectrejs/vectre">GitHub</a>
        </p>
        <columns>
          <column col="4" xs="12">
            <card>
              <card-header>Lightweight</card-header>
              <card-body>30+ components less than 14KB (gzipped)</card-body>
            </card>
          </column>
          <column col="4" xs="12">
            <card>
              <card-header>Simple</card-header>
              <card-body>Easy to use in development, convenient to use on the page</card-body>
            </card>
          </column>
          <column col="4" xs="12">
            <card>
              <card-header>Responsive</card-header>
              <card-body>Flexbox-based, responsive and mobile-friendly layout</card-body>
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
              Vectre has absorbed the best of both worlds. Clean, consistent design of Spectre and extensibility,
              flexibility of Vue will allow you to realize your ideas faster and easier.
            </p>
          </column>
          <column col="10" sm="12" mx>
            <router-link class="btn btn-lg" to="/pages/getting-started">Getting Started</router-link>
          </column>
        </columns>
      </container>
    </section>
    <Footer />
  </main>
</template>

<script lang="ts">
import Footer from '../component/Footer.vue';
import { Container, Columns, Column, Card, CardHeader, CardBody } from '@vectrejs/vectre';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  components: { Container, Columns, Column, Card, CardHeader, CardBody, Footer },
  data: () => ({ version: process.env.VUE_APP_VERSION }),
});
</script>

<style lang="scss">
#main-page {
  header,
  section {
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
      margin: 1rem 0 3rem;
      line-height: 1.5rem;
      // font-weight: 700;

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
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 0;
      }

      &-body {
        // font-weight: lighter;
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
    max-width: 960px;
    margin: 3rem auto 1rem;

    a {
      color: #000;
    }
  }
}

@media (min-width: 1800px) {
  #main-page {
    margin-top: 0.5rem;

    #overview {
      max-width: 960px;
      margin: 0 auto;
    }
  }
}
</style>
