<template>
  <div class="hello">
    <navbar></navbar>
    <div class="mainPg">
      <!-- Img carousel -->
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="../assets/pictures/screenShots of parkfinder/pf-1.png"
              alt="First slide"
              height="400px"
            >
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="../assets/pictures/screenshots of word-o-rama/wor-10.png"
              alt="Second slide"
              height="400px"
            >
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="../assets/pictures/screenShots of WordMorph/wm-1.png"
              alt="Third slide"
              height="400px"
            >
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <!-- Project Cards -->
      <br>
      <h1>{{ htmlJS }}</h1>
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src alt="Project Thumbnail Image">
          <div class="card-body">
            <h5 class="card-title">Project title</h5>
            <p class="card-text">Small Project Description.</p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src alt="Project Thumbnail Image">
          <div class="card-body">
            <h5 class="card-title">Project title</h5>
            <p class="card-text">Small Project Description.</p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src alt="Project Thumbnail Image">
          <div class="card-body">
            <h5 class="card-title">Project title</h5>
            <p class="card-text">Small Project Description.</p>
          </div>
        </div>
      </div>

      <!-- C# -->
      <br>
      <h1>{{ cSharp }}</h1>
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src alt="Project Thumbnail Image">
          <div class="card-body">
            <h5 class="card-title">Project title</h5>
            <p class="card-text">Small Project Description.</p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src alt="Project Thumbnail Image">
          <div class="card-body">
            <h5 class="card-title">Project title</h5>
            <p class="card-text">Small Project Description.</p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src alt="Project Thumbnail Image">
          <div class="card-body">
            <h5 class="card-title">Project title</h5>
            <p class="card-text">Small Project Description.</p>
          </div>
        </div>
      </div>
      <!-- iOS -->
      <br>
      <h1>{{ ios }}</h1>
      <div class="card-deck">
        <div class="card">
          <img
            class="card-img-top"
            src="../assets/pictures/screenShots of parkfinder/thumbnail.png"
            alt="Card image cap"
          >
          <div class="card-body">
            <h5 class="card-title">Park Finder</h5>
            <p
              class="card-text"
            >Park Finder is an app that allows you to find information about NYS parks.</p>
          </div>
          <router-link to="/parkFinder">View Project</router-link>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="../assets/pictures/screenshots of word-o-rama/thumbnail.png"
            alt="Project Thumbnail Image"
          >
          <div class="card-body">
            <h5 class="card-title">Word-O-Rama</h5>
            <p class="card-text">iPhone App that you can move the words around to make sentences.</p>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="../assets/pictures/screenShots of WordMorph/thumbnail.png"
            alt="Project Thumbnail Image"
          >
          <div class="card-body">
            <h5 class="card-title">Word Morph</h5>
            <p
              class="card-text"
            >iPad Puzzel App that you have to solve the word to move on to the next word!</p>
          </div>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
import Navbar from "./navigation";
export default {
  name: "work",
  components: { Navbar },
  data() {
    return {
      htmlJS: "HTML/JavaScript",
      cSharp: "C#",
      ios: "iOS"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-inner,
#carouselExampleIndicators,
.carousel-control-prev,
.carousel-control-next,
.carousel-control-prev-icon,
.carousel-control-next-icon {
  margin-right: 25px;
  margin-left: 25px;
}
.carousel-inner {
  width: auto;
}

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.mainPg {
  padding-left: 180px;
  text-align: center;
}

.card-deck {
  margin-left: 5px;
  margin-right: 5px;
}
</style>