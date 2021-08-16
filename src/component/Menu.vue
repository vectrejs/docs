<template>
  <div class="main-menu">
    <accordion :items="routes" :checked="checked" multiple @check="checked = $event">
      <!-- Menu item -->
      <template #header="{ item: route }">
        <div>
          <router-link
            v-if="!route.children && !route.anchors"
            :to="rootPath + route.path"
            tag="div"
            class="router-link"
            exact
            @click="onSelect"
          >
            <!-- {{ route }} -->
            {{ route.meta.title }}
          </router-link>

          <template v-else>
            <!-- {{ route }} -->
            {{ route.meta.title }}
          </template>
        </div>
      </template>

      <template #body="{ item: parent }">
        <!-- Submenu items with anchors -->
        <vertical-menu v-if="parent.anchors" :items="parent.anchors" class="menu-nav">
          <template #item="{ item: anchor, index: title }">
            <router-link :key="title" :to="rootPath + '/' + parent.path + '#' + anchor" @click="onSelect()">
              {{ title }}
            </router-link>
          </template>
        </vertical-menu>

        <!-- Submenu items from children -->
        <vertical-menu v-if="parent.children" :items="parent.children" class="menu-nav">
          <template #item="{ item: child }">
            <router-link :to="rootPath + '/' + parent.path + '/' + child.path" @click="onSelect">
              {{ child.meta.title }}
            </router-link>
          </template>
        </vertical-menu>
      </template>
    </accordion>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { RouteLocationRaw, RouteRecordRaw } from 'vue-router';
import { Accordion, VerticalMenu } from '@vectrejs/vectre';

export default defineComponent({
  components: { Accordion, VerticalMenu },
  props: {
    rootPath: { type: String, default: '' },
    routes: { type: Array as PropType<RouteRecordRaw[]>, default: (): [] => [] },
  },

  data: () => ({
    checked: [] as number[],
  }),

  created() {
    const matchedName = this.$router.currentRoute.value.name;

    for (const i in this.routes) {
      if (this.routes[i].children) {
        const isCurrent = this.routes[i].children?.some((child: RouteRecordRaw) => {
          return matchedName === child.name;
        });

        if (isCurrent) {
          this.checked = [+i];
          return;
        }
      } else if (matchedName === this.routes[i].name) {
        this.checked = [+i];
        return;
      }
    }
  },

  methods: {
    onSelect(): void {
      this.$emit('select');
    },
    goToAnchor(path: RouteLocationRaw, anchor: string): void {
      this.$router.push(`${path}#${anchor}`).catch(() => {
        /* NOOP */
      });
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
