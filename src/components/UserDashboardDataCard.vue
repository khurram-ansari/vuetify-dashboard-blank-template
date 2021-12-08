<template>
  <v-card
    min-height="120px"
    elevation="0"
    class="dashboard-cards"
    color="accent"
  >
    <v-card-title>
      <v-icon> mdi-account-group</v-icon>
      <span class="ml-3">Total Employees </span>
    </v-card-title>
    <v-card-title>33</v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "UserDashboardDataCard",
};
</script>
<style scoped>
.dashboard-cards {
  border-radius: 10px !important;
}
</style>
