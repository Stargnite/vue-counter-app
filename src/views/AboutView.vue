<template>
  <div class="about">
    <div class="about-left">
      <img src="https://thumbs.gfycat.com/PinkPiercingBull-size_restricted.gif" alt="vue gif" class="vue-gif">
    </div>
    <div class="about-right">
      <h1>About</h1>
      <p>
        This is a simple counter app built using Vue.js, a popular JavaScript
        framework for building a single page user interface. This app allows
        users to increment and decrement the count by clicking on two buttons,
        also set the value of the count through the input space and displays the
        current count value. There is also a reset button used to return the
        count's value back to its original state which is '0'. <br /><br />
        <a href="https://github.com/Stargnite/vue-counter-app" target="_blank">
          <button class="code-btn">See Code</button>
        </a>
      </p>
    </div>
  </div>
</template>

<style>
.about {
  display: grid;
  margin: 0.5rem 2rem;
  grid-template-columns: repeat(2, 1fr);
  min-height: 70vh;

  animation: fadeInAnimation ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.vue-gif {
  width: 100%;
  height: 100%;
  padding: 1% 5%;
  margin: 0;
  padding: 0;
}

.about-right {
  background-color: #fff;
  /* border-radius: 5%; */
}
.about-right h1 {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-align: center;
  font-size: 1.5rem;
  color: #34495e;
}
.about-right p {
  font-size: 30px;
  padding: 0 5%;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.code-btn {
  background-color: #41b883;
}

@media screen and (max-width: 700px) {
  .about {
    display: flex;
    flex-direction: column;
  }
  .about-right p {
  font-size: 15px;
  padding: 1% 5%;
}
}
</style>
