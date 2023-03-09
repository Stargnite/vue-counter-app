<template>
    <nav>
      <h1>Counter App</h1>
      <div class="nav-btn">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/counter">Counter</router-link>
      </div>
    </nav>
    <router-view />
</template>

<style>
body {
  background-image: url('./../src/assets/logo-2.svg');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  padding: 0;
  margin: 0;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eee;
  padding: 0.2rem 2rem;
  background-color: #53d198;
}

nav h1 {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.nav-btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20rem;
  font-size: 1.5rem;
}

nav a {
  text-decoration: none;
  color: #333;
}
nav a:hover {
  text-decoration: underline;
}

</style>
