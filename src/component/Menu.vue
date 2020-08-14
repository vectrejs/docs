<template>
  <div class="main-menu">
    <accordion :items="routes" :checked="checked" multiple @check="checked = $event">
      <!-- Menu item -->
      <div slot="header" slot-scope="{ item: route }">
        <router-link
          v-if="!route.children && !route.anchors"
          :to="rootPath + route.path"
          tag="div"
          class="router-link"
          exact
          @click.native="onSelect"
        >
          <!-- {{ route }} -->
          {{ route.meta.title }}
        </router-link>

        <template v-else>
          <!-- {{ route }} -->
          {{ route.meta.title }}
        </template>
      </div>

      <template slot="body" slot-scope="{ item: parent }">
        <!-- Submenu items with anchors -->
        <vertical-menu v-if="parent.anchors" :items="parent.anchors" class="menu-nav">
          <router-link
            :key="title"
            slot-scope="{ item: anchor, index: title }"
            :to="rootPath + parent.path + '#' + anchor"
            @click.native="onSelect(), goToAnchor(rootPath + parent.path, anchor)"
          >
            {{ title }}
          </router-link>
        </vertical-menu>

        <!-- Submenu items from children -->
        <vertical-menu v-if="parent.children" :items="parent.children" class="menu-nav">
          <router-link
            slot-scope="{ item: child }"
            :to="rootPath + parent.path + '/' + child.path"
            @click.native="onSelect"
          >
            {{ child.meta.title }}
          </router-link>
        </vertical-menu>
      </template>
    </accordion>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { RawLocation } from 'vue-router';
import { RouteConfig } from 'vue-router/types/router';

export default Vue.extend({
  props: {
    rootPath: { type: String, default: '' },
    routes: { type: [Object, Array], default: (): [] => [] },
  },

  data: () => ({
    checked: [] as number[],
  }),

  created() {
    const matched = this.$router.getMatchedComponents();

    for (const i in this.routes) {
      if (this.routes[i].children) {
        const isCurrent = this.routes[i].children.some((child: RouteConfig) =>
          matched.some((match: any) => child.name && match.extendOptions.name === child.name),
        );

        if (isCurrent) {
          this.checked = [+i];
          return;
        }
      } else if (
        matched.some((match: any) => this.routes[i].name && match.extendOptions.name === this.routes[i].name)
      ) {
        this.checked = [+i];
        return;
      }
    }
  },

  methods: {
    onSelect(): void {
      this.$emit('select');
    },
    goToAnchor(path: RawLocation, anchor: string): void {
      this.$router.push(`${path}#${anchor}`);
    },
  },
});
</script>

<style lang="scss">
.main-menu {
  .router-link-active {
    font-weight: bold;
  }
}
</style>
