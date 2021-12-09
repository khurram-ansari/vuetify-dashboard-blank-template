<template>
  <div>
    <v-row>
      <v-col>
        <h2>Dashboard</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="4" md="3">
        <user-dashboard-data-card />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import UserDashboardDataCard from "../components/UserDashboardDataCard.vue";
export default {
  components: { UserDashboardDataCard },
};
</script>

<style></style>
