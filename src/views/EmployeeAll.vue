<template>
  <div>
    <v-row>
      <v-col>
        <router-link
          :to="{ name: 'dash.employee.add' }"
          v-slot:default="{ navigate }"
        >
          <v-btn @click="navigate" dark
            ><v-icon>mdi-plus</v-icon> Add Employee</v-btn
          >
        </router-link>
      </v-col>
    </v-row>
    <v-row class="flex-column flex-sm-row">
      <v-col>
        <h2>All Employees</h2>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <v-text-field
          style="max-width: 400px"
          filled
          v-model.trim="search"
          hide-details
          rounded
          prepend-inner-icon="mdi-magnify"
          dense
          placeholder="Search"
      /></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :search="search"
          mobile-breakpoint="0"
          hide-default-header
          :headers="headers"
          :items="desserts"
          class="border-1"
          :items-per-page="10"
          show-select
          item-key="name"
          v-model="selectedRows"
        >
          <template v-slot:item.sno="{ item }">
            {{ desserts.indexOf(item) + 1 }}
          </template>
          <template v-slot:item.name="{ item }">
            <v-list color="transparent">
              <v-list-item>
                <v-list-item-avatar>
                  <v-img
                    :alt="`${item.name} avatar`"
                    :src="getGenderAvatar(item.gender, item.name)"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </template>
          <template v-slot:header="{ props, on }">
            <thead>
              <tr>
                <th v-for="header in props.headers" :key="header.value">
                  <v-tooltip bottom v-if="header.value === 'data-table-select'">
                    <template v-slot:activator="{ on: tooltip }">
                      <v-simple-checkbox
                        v-on="tooltip"
                        :ripple="false"
                        v-model="props.everyItem"
                        :indeterminate="props.someItems && !props.everyItem"
                        color="grey darken-4"
                        @input="on['toggle-select-all']"
                      ></v-simple-checkbox>
                    </template>
                    <span>Select All</span>
                  </v-tooltip>

                  <template v-else>
                    {{ header.text.toUpperCase() }}
                  </template>
                </th>
              </tr>
            </thead>
          </template>
          <template v-slot:item.status="{ item }">
            <v-chip dark class="orange lighten-1 text--center">
              {{ item.status }}
            </v-chip>
          </template>
          <template v-slot:item.designation="{ item }">
            <v-chip dark class="grey lighten-1 text--center">
              {{ item.designation }}
            </v-chip>
          </template>

          <template v-slot:item.actions="{ item }">
            <div class="d-flex">
              <v-btn @click="editItem(item)" class="mx-2" fab depressed x-small>
                <v-icon small> mdi-pencil </v-icon>
              </v-btn>
              <v-btn
                @click="deleteItem(item)"
                class="mx-2"
                depressed
                fab
                x-small
              >
                <v-icon small> mdi-delete </v-icon>
              </v-btn>
            </div>
          </template>

          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize"> Reset </v-btn>
          </template>
          <template v-slot:top>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5"
                  >Are you sure you want to delete this item?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import UserDashboardDataCard from "../components/UserDashboardDataCard.vue";
export default {
  name: "UserDashboardAllEmployees",
  // components: { UserDashboardDataCard },

  data: () => ({
    selectedRows: [],
    search: "",
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "#", value: "sno", sortable: false, filterable: false },

      {
        text: "Name",
        align: "start",
        sortable: false,
        value: "name",
      },

      { text: "Designation", value: "designation" },
      { text: "Email", value: "email" },
      { text: "Phone", value: "phone" },
      { text: "status", value: "status" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      console.table(val);
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    getGenderAvatar(gender, name) {
      if (!gender && !name)
        return "https://sparktechsolutions.org/wp-content/uploads/2021/03/logoWhiteBg.svg";

      if (gender) {
        if (gender.toString().toLowerCase() === "male")
          return `https://avatars.dicebear.com/api/micah/${name}.svg?options[facialHairProbability]=40&options[hair]=fonze&options[baseColor]=white&options[mouth]=smile&options[earringsProbability]=0`;
        return `https://avatars.dicebear.com/api/micah/${name}.svg?options[facialHairProbability]=0&options[hair]=full&options[baseColor]=white&options[mouth]=smile&options[earringsProbability]=40`;
      }
      return `https://avatars.dicebear.com/api/initials/${name}.svg`;
    },

    initialize() {
      this.desserts = this.$store.getters["employees/employeesList"];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style scoped></style>
