<template>
  <container grid="xl">
    <off-canvas ref="offCanvas">
      <template slot="sidebar">
        <div class="logo">
          <img :src="require('@kitchen/img/logo.svg')">
        </div>
        <mnu :routes="routes" @select="closeSidebar"/>
      </template>

      <router-view slot="content"/>
    </off-canvas>
  </container>
</template>

<script lang="ts">
import vue from 'vue';
import { Component } from 'vue-property-decorator';
import router, { routes } from './router';

import './assets/';

import { VectrePlugin } from 'vectre';
import ComponentView from '@kitchen/component/Component.vue';
import Mnu from '@kitchen/component/Menu.vue';

// Register common components
vue.component('component-view', ComponentView);
vue.use(VectrePlugin);

@Component({
  router,
  components: {
    Mnu,
  },
})
export default class extends vue {
  private routes = routes;

  public closeSidebar() {
    (this.$refs.offCanvas as any).hideSidebar();
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-left: 0;
}

@media (max-width: 960px) {
  /deep/ .off-canvas {
    display: inherit;

    &-content {
      padding: 0rem;
      margin-top: 30.5rem;
    }
  }
}

@media (min-width: 960px) {
  /deep/ h2.title {
    margin-top: 0.5rem;
  }
}

/deep/ .off-canvas {
  &-toggle {
    top: 0;
    left: 0;
    padding: 0.5rem 1rem;
    position: fixed;
    width: 100%;
    background: rgba(248, 249, 250, 0.65);
    z-index: 100;

    background-image: url("img/logo.svg");
    background-repeat: no-repeat;
    background-size: 90px;
    background-position-y: 7px;
    background-position-x: calc(100vw - 110px);

    .btn {
      width: 1.4rem;
      font-size: 0.7rem;
      height: 1.4rem;
      padding: 0.05rem 0.3rem;
    }
  }

  &-sidebar {
    min-height: 100vh;
    width: 12rem;

    .main-menu {
      position: fixed;
      width: 12rem;
      padding: 0.5rem 1.5rem;
      top: 3.5rem;
      bottom: 1.5rem;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;

      .menu-item > a {
        background: 0 0;
        color: #667189;
        display: inline-block;
      }

      .menu .menu-item {
        font-size: 0.7rem;
        padding-left: 1rem;
      }
    }

    .logo {
      margin-left: 1.5rem;
      position: fixed;
      margin-top: 0.85rem;

      img {
        display: inline-block;
        height: auto;
        width: 7rem;
      }
    }
  }

  &-content {
    padding-top: 0.85rem;
  }
}
</style>