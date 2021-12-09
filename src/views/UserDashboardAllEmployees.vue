<template>
  <div>
    <v-row>
      <v-col sm="4" md="3"> <user-dashboard-data-card /> </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn dark><v-icon>mdi-plus</v-icon> Add Employee</v-btn>
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
          v-model="search"
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

          <template v-slot:item.actions="{ item }">
            <div class="d-flex">
              <v-btn class="mx-2" fab depressed x-small>
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
import UserDashboardDataCard from "../components/UserDashboardDataCard.vue";
export default {
  name: "UserDashboardAllEmployees",
  components: { UserDashboardDataCard },

  data: () => ({
    selectedRows: [],
    search: "",
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
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
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
        },
      ];
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
