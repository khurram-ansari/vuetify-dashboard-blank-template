<template>
  <div>
    <input
      type="file"
      accept="image/png, image/jpeg, image/svg"
      placeholder="Pick an avatar"
      ref="inputImg"
      v-show="false"
      @input="imgSelectHandler"
    />
    <v-hover v-slot="{ hover }">
      <v-avatar size="100">
        <img :src="imageUrl" />
        <v-fade-transition>
          <v-overlay
            style="cursor: pointer"
            @click="openImgPicker"
            v-if="hover"
            :absolute="true"
            :value="true"
          >
            Change Profile Pic
          </v-overlay>
        </v-fade-transition>
      </v-avatar>
      <!-- <v-img
        :aspect-ratio="16 / 9"
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text"
            style="height: 100%"
          >
            $14.99
          </div>
        </v-expand-transition>
      </v-img> -->
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "EmployeeDpPicker",
  props: {
    imageUrl: {
      type: [String, File],
      default: "",
    },
  },

  methods: {
    imgSelectHandler: function (event) {
      const file = event.target.files[0];
      file ? this.$emit("update:imageUrl", URL.createObjectURL(file)) : "";
    },
    openImgPicker: function () {
      this.$refs.inputImg.click();
    },
  },
};
</script>

<style>
</style>