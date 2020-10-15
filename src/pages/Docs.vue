<template>
  <container grid="xl">
    <off-canvas id="docs" ref="offCanvas">
      <template slot="sidebar">
        <nav>
          <div class="logo">
            <router-link to="/">
              <img :src="require('@kitchen/img/logo.svg')" />
            </router-link>
          </div>
          <mnu :routes="routes" :root-path="rootPath" @select="closeSidebar" />
        </nav>
      </template>

      <template slot="content">
        <main>
          <router-view />
        </main>
        <Footer />
      </template>
    </off-canvas>
  </container>
</template>

<script lang="ts">
import vue from 'vue';
import { RouteConfig } from 'vue-router';
import { Component, Prop } from 'vue-property-decorator';
import { VectrePlugin, OffCanvas } from '@vectrejs/vectre';

import ComponentView from '@kitchen/component/Component.vue';
import Footer from '@kitchen/component/Footer.vue';
import Mnu from '@kitchen/component/Menu.vue';

// Register common components
vue.component('component-view', ComponentView);
vue.use(VectrePlugin);

@Component({
  components: {
    Mnu,
    Footer,
  },
})
export default class extends vue {
  @Prop(Array)
  public routes: RouteConfig[];

  @Prop({ default: '', type: String })
  public rootPath: string;

  public closeSidebar(): void {
    (this.$refs.offCanvas as InstanceType<typeof OffCanvas>).hideSidebar();
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-left: 0;
}

main {
  min-height: calc(100vh - 160px);
}

/deep/ footer {
  margin: 3rem 0 1rem;

  .container {
    padding: 0;
  }
}

@media (max-width: 960px) {
  /deep/ #docs.off-canvas {
    display: inherit;

    & > .off-canvas-content {
      padding: 0rem;
    }
  }
}

@media (min-width: 960px) {
  /deep/ h2.title {
    margin-top: 0.5rem;
  }
}

/deep/ #docs.off-canvas {
  & > .off-canvas-toggle {
    top: 0;
    left: 0;
    padding: 0.5rem 1rem;
    position: fixed;
    width: 100%;
    background: rgba(248, 249, 250, 0.65);
    z-index: 100;

    background-image: url('../img/logo.svg');
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

  & > .off-canvas-sidebar {
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

      a:focus {
        box-shadow: unset;
      }

      img {
        display: inline-block;
        height: auto;
        width: 7rem;
      }
    }
  }

  & > .off-canvas-content {
    padding-top: 0.85rem;
  }
}
</style>
