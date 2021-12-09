<template>
  <v-app-bar
    elevate-on-scroll
    elevation="2"
    height="100px"
    flat
    color="white"
    app
    class="px-5"
  >
    <v-app-bar-nav-icon
      @click="emitSidebarEvent"
      v-if="$vuetify.breakpoint.smAndDown"
    ></v-app-bar-nav-icon>

    <v-spacer />
    <v-menu offset-y>
      <template v-slot:activator="{ on: menu, attrs }">
        <v-badge :value="3" :content="3" color="red" overlap>
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-btn v-bind="attrs" v-on="{ ...tooltip, ...menu }" rounded icon>
                <v-icon color="grey darken-3">mdi-bell</v-icon>
              </v-btn>
            </template>
            <span>Notficiations</span>
          </v-tooltip>
        </v-badge>
      </template>
      <user-dashboard-notification />
    </v-menu>

    <v-divider vertical inset class="mx-4" />
    <v-menu offset-y>
      <template v-slot:activator="{ on: menu, attrs }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn v-bind="attrs" v-on="{ ...tooltip, ...menu }" rounded icon>
              <v-avatar>
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-avatar>
            </v-btn>
          </template>
          <span>User Account</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item link>
          <v-list-icon><v-icon class="mx-2">mdi-account</v-icon></v-list-icon>
          <v-list-content> My Profile </v-list-content>
        </v-list-item>
        <v-list-item link>
          <v-list-icon><v-icon class="mx-2">mdi-logout</v-icon></v-list-icon>
          <v-list-content> Logout </v-list-content>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-badge :value="2" color="primary" overlap>
            <v-btn  icon v-bind="attrs" v-on="on">
              <v-icon>mdi-bell</v-icon>
            </v-btn>
          </v-badge>
        </template>
        <user-dashboard-notification />
      </v-menu>
    </div>
    <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-badge :value="2" color="primary" overlap>
            <v-btn small icon v-bind="attrs" v-on="on">
              <v-avatar>
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-avatar>
            </v-btn>
          </v-badge>
        </template>
        <user-dashboard-notification />
      </v-menu>
    </div> -->
  </v-app-bar>
</template>

<script>
import { bus } from "@/main.js";
import UserDashboardNotification from "./UserDashboardNotification.vue";
export default {
  name: "TheAppbar",
  components: { UserDashboardNotification },
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
  methods: {
    emitSidebarEvent() {
      bus.$emit("toggle-sidebar");
    },
  },
};
</script>

<style></style>
