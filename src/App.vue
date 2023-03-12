<script>
let isActive = false;

const toggleNav = () => {
  console.log("clicked meeeeeeeee");
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

const toggleNavv = () => {
  alert ('This is a decoy, nothing to see here')
}

export default {
  methods: {
    toggleNav,
    toggleNavv
  },
};
</script>

<template>
  <nav>
    <h1>Counter App</h1>
    <div class="nav-btns">
      <router-link to="/" @click="toggleNav">Home</router-link>
      <router-link to="/about" @click="toggleNav">About</router-link>
      <router-link to="/counter" @click="toggleNav">Counter</router-link>
    </div>
    <div class="nav-icon" @click="toggleNavv">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </div>
  </nav>
  <router-view />
</template>

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

.nav-btns,
.nav-btns-sm {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20rem;
  font-size: 1.5rem;
}

.nav-btns-sm {
  display: none;
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

nav a:hover,
nav a:focus {
  text-decoration: underline;
  color: white;
}

.active {
  display: block;
}

@media screen and (max-width: 560px) {
  .nav-btns {
    display: none;
    flex-direction: column;
  }

  .active {
    display: block;
  }

  .nav-icon {
    display: block;
  }
}
</style>
