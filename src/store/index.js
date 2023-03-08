import { createStore } from "vuex";

const store = createStore({
  state: {
    counter: 0,
  },

  // getters: {},

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
    updateCounter: function(e, state, value) {
      console.log(e.target.value)
      state.counter = e.target.value
    }

    // update: (state) => {
    //   state.counter = input.value
    // }
  },

  actions: {},

  modules: {},
});

export default store;
