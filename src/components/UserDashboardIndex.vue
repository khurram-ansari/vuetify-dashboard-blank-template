<template>
  <div style="height: 100%">
    <the-appbar />
    <the-sidebar />
    <div class="pa-5" style="height: 100%; overflow: hidden">
      <transition name="slide-x-transition" mode="out-in">
        <router-view :key="$route.path" />
        ></transition
      >
    </div>

    <!-- <v-navigation-drawer app v-model="drawer">
    <v-list-item class="px-2">
      <v-list-item-title>SparkTech Solutions</v-list-item-title>
    </v-list-item>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon color="black">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer> -->
  </div>
</template>

<script>
import TheAppbar from "../components/TheAppbar.vue";
import TheSidebar from "../components/TheSidebar.vue";
export default {
  components: { TheSidebar, TheAppbar },
  data: function () {
    return {
      drawer: null,
    };
  },
};
</script>

<style></style>
