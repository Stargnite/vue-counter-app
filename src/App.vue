<template>
  <nav>
    <h1>Counter App</h1>
    <div class="nav-btns">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/counter">Counter</router-link>
    </div>
    <div class="nav-icon" @click="toggleNav">
      <font-awesome-icon icon="fa-solid fa-bars" @click="toggleNav" />
    </div>
  </nav>
  <router-view />
</template>

<script>
let isActive = false;

const toggleNav = () => {
  console.log('clicked')
  const nav = document.getElementsByClassName("nav-btns");
  const toggle = document.getElementsByClassName("nav-icon");

  if (!isActive) {
    nav.classList.add("active");
    toggle.classList.add("active");
    isActive = true;
  } else {
    nav.classList.remove("active");
    toggle.classList.remove("active");
    isActive = false;
  }

};
</script>

<style>
body {
  background-color: #333;
  background-image: url("./../src/assets/logo-2.svg");
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
  color: #eee;
  padding: 0.2rem 2rem;
  background-color: #53d198;

  animation: slider ease 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;
}

@keyframes slider {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}

nav h1 {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-align: center;
}

.nav-btns {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20rem;
  font-size: 1.5rem;
}

.nav-icon {
  font-size: 1.5rem;
  display: none;
}

nav a {
  text-decoration: none;
  color: #252424;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  transition: all 0.3s linear 0s;
}

nav a:hover, nav a:focus {
  text-decoration: underline;
  color: white;
}

.active {
  display: block;
}

@media screen and (max-width: 560px) {
  .nav-btns {
    display: none;
  }

  .active {
  display: flex;
}

  .nav-icon {
    display: block;
  }
}
</style>
