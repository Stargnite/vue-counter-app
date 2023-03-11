<template>
  <div class="error-page">
    <h2>Sorry, it seems the page you're looking for does not exist</h2>
    <router-link to="/">
      <button>Return home</button>
    </router-link>
  </div>
</template>

<style scoped>
.error-page {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

h2 {
  color: rgb(233, 236, 235);
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding: 3%;
}
</style>
