<template>
  <h1>Counter app made with vueJs</h1>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
h1 {
  width: 100%;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: capitalize;
  font-family:monospace;
  color: white;
  font-size: 2.5rem;
  white-space: nowrap;
  transition: width 2s linear 1s;

  animation: fadeInAnimation ease 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@media screen and (max-width: 750px) {
  h1 {
    white-space: normal;
  }
}
</style>
