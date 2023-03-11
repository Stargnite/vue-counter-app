<template>
  <div class="home-page">
    <h1>Counter app made with vueJs</h1>
    <router-link to="/counter">
      <button>Counter App</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.home-page {
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: capitalize;
}

h1 {
  width: 80vw;
  font-family: monospace;
  color: white;
  font-size: 2.5rem;
  white-space: nowrap;

  animation: fadeInAnimation ease 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

button {
  background-color: green;
  color: antiquewhite;

  animation: slider ease 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;
}

@media screen and (max-width: 750px) {
  h1 {
    white-space: normal;
    font-size: 25px;
  }
}
</style>
