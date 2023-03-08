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
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eee;
  padding: 1.5rem;
  background-color: greenyellow;
}

.nav-btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20rem;
}

nav a {
  text-decoration: none;
  color: #333;
}
</style>
