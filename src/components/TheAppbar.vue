<template>
  <v-app-bar flat color="white" app>
    <v-app-bar-nav-icon
      @click="emitSidebarEvent"
      v-if="$vuetify.breakpoint.smAndDown"
    ></v-app-bar-nav-icon>

    <v-spacer />

    <v-text-field
      rounded
      dense
      flat
      hide-details
      placeholder="Search"
      prepend-inner-icon="mdi-magnify"
      style="max-width: 400px"
      filled
    ></v-text-field>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-filter</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { bus } from "@/main.js";
export default {
  methods: {
    emitSidebarEvent() {
      bus.$emit("toggle-sidebar");
    },
  },
};
</script>

<style>
</style>