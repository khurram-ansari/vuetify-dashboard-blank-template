import Vuetify from 'vuetify';
import Vue from "vue";
import { shallowMount } from '@vue/test-utils'
import UserDashboardAllEmployees from '@/views/UserDashboardAllEmployees.vue';

describe('UserDashboardAllEmployees.vue', () => {
  Vue.use(Vuetify);
  const wrapper = shallowMount(UserDashboardAllEmployees, { Vue });
  it('generate male avatar when gender male passed', () => {

    const maleStr = "https://avatars.dicebear.com/api/micah/Khurram Ansari.svg?options[facialHairProbability]=40&options[hair]=fonze&options[baseColor]=white&options[mouth]=smile&options[earringsProbability]=0";
    const output = wrapper.vm.getGenderAvatar("male", "Khurram Ansari");
    expect(output).toMatch(maleStr);
  })
  it('generate female avatar when gender female passed', () => {

    const femaleStr = "https://avatars.dicebear.com/api/micah/Khurram Ansari.svg?options[facialHairProbability]=0&options[hair]=full&options[baseColor]=white&options[mouth]=smile&options[earringsProbability]=40";
    const output = wrapper.vm.getGenderAvatar("female", "Khurram Ansari");
    expect(output).toMatch(femaleStr);
  })
  it('generate name initial avatar when no gender  passed', () => {

    const initialStr = "https://avatars.dicebear.com/api/initials/Khurram Ansari.svg";
    const output = wrapper.vm.getGenderAvatar("", "Khurram Ansari");
    expect(output).toMatch(initialStr);
  })
  it('generate default when no gender and name passed', () => {

    const defStr = "https://sparktechsolutions.org/wp-content/uploads/2021/03/logoWhiteBg.svg";
    const output = wrapper.vm.getGenderAvatar();
    expect(output).toMatch(defStr);
  })
})
