<template>
  <div class="counter-gen">
    <div class="counter">
      <h1>{{ counter }}</h1>
      <button @click="decrement" class="decrement">-</button>
      <button @click="reset" class="reset">
        <font-awesome-icon icon="fa-solid fa-arrow-rotate-left" />
      </button>
      <button @click="increment" class="increment">+</button>
      <input type="number" v-model="counter" />
    </div>
    <router-link to="/">
      <button>Back Home</button>
    </router-link>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
// import { CounterFunctions } from "./../composables/Composable.js";

// const { increment, decrement, reset } = CounterFunctions();

export default {
  name: "Counter",
  computed: {
    ...mapFields({
      counter: "counter",
    }),
  },

  // methods: {
  //   increment: function () {
  //     increment;
  //   },
  //   decrement: function () {
  //     decrement;
  //   },
  //   reset: function () {
  //     reset;
  //   },
  // },

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
.counter-gen {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.counter {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  justify-content: center;

  animation: fadeInAnimation ease 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.counter h1 {
  font-size: 5rem;
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 6;
  padding: 0;
  margin: 0;
  color: rgb(0, 139, 74);
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

button {
  font-size: 1.2rem;
  border: none;
  width: auto;
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 10%;
}

.decrement {
  grid-column-start: 1;
  grid-column-end: 2;
  background-color: rgb(243, 39, 12);
}
.reset {
  grid-column-start: 3;
  grid-column-end: 3;
}

.increment {
  grid-column-start: 5;
  grid-column-end: 5;
  background-color: rgb(0, 139, 74);
}

.counter input {
  grid-column-start: 1;
  grid-column-end: 6;
  background-color: #fff;
  border: none;
  height: 2rem;
}
</style>
