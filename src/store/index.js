import { createStore } from "vuex";
import { getField, updateField } from 'vuex-map-fields';

const store = createStore({
  state: {
    counter: 0,
  },

  getters: {
    getField,
    counter: (state) => state.counter,
  },

  mutations: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    reset: (state) => {
      state.counter = 0;
    },
    updateField,
  },

  actions: {},

  modules: {},
});

export default store;
