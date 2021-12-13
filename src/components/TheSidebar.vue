<template>
  <v-navigation-drawer app v-model="drawer">
    <v-list-item class="px-2">
      <v-list-item-title>SparkTech Solutions</v-list-item-title>
    </v-list-item>
    <v-list dense>
      <v-list-item
        exact
        :to="{ name: item.routeName }"
        v-for="item in items"
        :key="item.title"
        link
      >
        <v-list-item-icon>
          <v-icon color="black">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { bus } from "@/main.js";
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-home-city", routeName: "dash.home" },
        {
          title: "Employees",
          icon: "mdi-account-group",
          routeName: "dash.employee",
        },
      ],
    };
  },
  created: function () {
    bus.$on("toggle-sidebar", () => {
      this.drawer = !this.drawer;
    });
  },
};
</script>

<style></style>
