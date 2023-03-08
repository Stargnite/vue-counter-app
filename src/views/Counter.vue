<template>
  <h1>{{ counter }}</h1>
  <button @click="decrement">- Decrement</button>
  <button @click="reset">Reset</button>
  <button @click="increment">+ Increment</button>
      <input type="number" v-model="counter" @input="updateCounter">
      <!-- <button @click=''>update</button> -->
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "Counter",
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    set(value) {
        this.$store.commit('updateCounter', value)
      }
  },

  ...mapState({
      counter: state => state.counter
    }),

  methods: {
    increment: function() {
      this.$store.commit("increment");
    },
    decrement: function() {
      this.$store.commit("decrement");
    },
    reset: function() {
      this.$store.commit('reset')
    },
  },
};
</script>
