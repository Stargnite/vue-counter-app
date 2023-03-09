<template>
  <div class="counter">
    <h1>{{ counter }}</h1>
    <button @click="decrement" class="decrement">-</button>
    <button @click="reset" class="reset">Reset</button>
    <button @click="increment" class="increment">+</button>
    <input type="number" v-model="counter" @input="updateCounter" />
    <!-- <button @click=''>update</button> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Counter",
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    set(value) {
      this.$store.commit("updateCounter", value);
    },
  },

  ...mapState({
    counter: (state) => state.counter,
  }),

  methods: {
    increment: function () {
      this.$store.commit("increment");
    },
    decrement: function () {
      this.$store.commit("decrement");
    },
    reset: function () {
      this.$store.commit("reset");
    },
  },
};
</script>

<style>
.counter {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);

  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.counter h1 {
  font-size: 5rem;
  grid-column-start: 1;
  grid-column-end: 6;
  padding: 0;
  margin: 0;
  color: rgb(0, 139, 74);
}

button {
  font-size: 1.2rem;
}

.decrement {
  grid-column-start: 1;
  grid-column-end: 2;
}
.reset {
  grid-column-start: 3;
  grid-column-end: 3;
}

.increment {
  grid-column-start: 5;
  grid-column-end: 5;
}

.counter input {
  grid-column-start: 1;
  grid-column-end: 6;
}
</style>
