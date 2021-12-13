<template>
  <div>
    <v-row>
      <v-col>
        <h2>Add Employee</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-snackbar color="success" v-model="snackModel" :timeout="timeout">
          Employee Added Successfully
        </v-snackbar>
        <v-card elevation="0">
          <v-form @submit.prevent="submitHandler" ref="employeeAddForm">
            <v-row class="flex-md-row-reverse flex-column">
              <v-col>
                <v-card-title>Profile Picture</v-card-title>
                <v-card-text>
                  <employee-dp-picker :imageUrl.sync="imageUrl" />
                </v-card-text>
              </v-col>
              <v-col>
                <v-card-title>Personal Info</v-card-title>
                <v-card-text>
                  <v-text-field
                    :rules="[rules.required]"
                    dense
                    filled
                    rounded
                    label="Fullname"
                    v-model.trim="formfields.name"
                    placeholder="e.g John Doe"
                  ></v-text-field>

                  <v-text-field
                    :rules="[rules.required, rules.email]"
                    dense
                    filled
                    rounded
                    v-model.trim="formfields.email"
                    label="Email"
                    placeholder="e.g johndoe@example.com"
                  ></v-text-field>
                  <v-text-field
                    dense
                    filled
                    :rules="[rules.required, rules.phone]"
                    rounded
                    v-model.trim="formfields.phone"
                    label="Phone"
                    placeholder="e.g 03333333888"
                  ></v-text-field>
                  <v-radio-group
                    label="Choose gender"
                    :rules="[rules.required]"
                    row
                    dense
                    v-model="formfields.gender"
                  >
                    <v-radio label="Male" value="male" />
                    <v-radio label="Female" value="female" />
                  </v-radio-group>
                </v-card-text>

                <v-card-title>Organization</v-card-title>
                <v-card-text>
                  <v-select
                    dense
                    rounded
                    :rules="[rules.required]"
                    v-model.trim="formfields.designation"
                    label="Designation"
                    filled
                    :items="['Developer', 'Engineer', 'Consultant']"
                  >
                  </v-select>
                </v-card-text>
              </v-col>
            </v-row>
            <v-card-text>
              <v-btn dark type="submit">Add</v-btn>
            </v-card-text>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import EmployeeDpPicker from "../components/EmployeeDpPicker.vue";
const defaultImgUrl = require("@/assets/images/EmployeeDefaultDp.svg");
let aborter = null; // make the aborter accessible

export default {
  components: { EmployeeDpPicker },
  data: function () {
    return {
      imageUrl: null,
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
        phone: (value) => {
          const pattern = /^[0-9]{11}$/;
          return pattern.test(value) || "Invalid phone.";
        },
      },
      snackModel: false,
      formfields: {
        image: null,
        name: null,
        designation: null,
        gender: "male",
        phone: null,
        email: null,
      },
    };
  },

  watch: {
    imageUrl: {
      handler: async function (newval) {
        try {
          if (aborter) aborter.abort();
          aborter = new AbortController();
          const signal = aborter.signal;
          const resp = await fetch(newval, { signal });
          this.image = await resp.blob();

          // TODO:show error if image not valid
        } catch (Er) {
          return;
        }
      },
    },
    "formfields.name": {
      handler: function (newval) {
        const regex = /^blob:http[s]?:/;
        if (!this.imageUrl || !this.imageUrl?.match(regex)) {
          this.imageUrl = newval
            ? `https://avatars.dicebear.com/api/initials/${newval}.svg`
            : defaultImgUrl;
        }
      },
      immediate: true,
    },
  },
  methods: {
    submitHandler() {
      if (this.$refs.employeeAddForm.validate()) {
        this.formfields.image = this.formfields.imageUrl; //TODO: remove this line to have image as BLOB instead of String URL
        this.formfields.status = "active";
        this.$store.commit("employees/ADD_EMPLOYEE", this.formfields);
        this.snackModel = true;
        this.$refs.employeeAddForm.reset();
      }
    },
  },
};
</script>

<style></style>
