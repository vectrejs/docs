<template>
  <column col="10" xl="12" mr>
    <slot />

    <template v-if="props">
      <props-list v-for="(list, k) in props" :key="'props' + k" :props="list.props" :name="list.name" />
    </template>

    <template v-if="methods">
      <MethodList v-for="(list, k) in methods" :key="'methods' + k" :methods="list.methods" :name="list.name" />
    </template>

    <template v-if="events">
      <events-list v-for="(list, k) in events" :key="'events' + k" :name="list.name" :events="list.events" />
    </template>

    <template v-if="slots">
      <slots-list v-for="(list, k) in slots" :key="'slots' + k" :slots="list.slots" :name="list.name" />
    </template>
  </column>
</template>

<script lang="ts">
import vue from 'vue';
import EventsList, { EventDefinitions } from '@kitchen/component/Events';
import PropsList, { PropDefinitions } from '@kitchen/component/Props';
import SlotsList, { SlotDefinitions } from '@kitchen/component/Slots';
import MethodList, { MethodDefinitions } from '@kitchen/component/Methods';

export default vue.extend({
  components: { EventsList, PropsList, SlotsList, MethodList },
  computed: {
    props(): PropDefinitions[] | undefined {
      const props = this.$parent.$data.props;
      if (this.isMultipleLists(props)) {
        return props;
      }

      return props ? [{ props }] : void 0;
    },

    slots(): SlotDefinitions[] | undefined {
      const slots = this.$parent.$data.slots;

      if (this.isMultipleLists(slots)) {
        return slots;
      }

      return slots ? [{ slots }] : void 0;
    },

    events(): EventDefinitions[] | undefined {
      const events = this.$parent.$data.events;

      if (this.isMultipleLists(events)) {
        return events;
      }

      return events ? [{ events }] : void 0;
    },

    methods(): MethodDefinitions[] | undefined {
      const methods = this.$parent.$data.methods;

      if (this.isMultipleLists(methods)) {
        return methods;
      }

      return methods ? [{ methods }] : void 0;
    },
  },
  methods: {
    isMultipleLists(list: EventDefinitions[] | SlotDefinitions[] | PropDefinitions[] | MethodDefinitions[]): boolean {
      return Array.isArray(list);
    },
  },
});
</script>
