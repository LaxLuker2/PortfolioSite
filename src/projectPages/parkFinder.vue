<template>
  <div class="hello">
    <navbar></navbar>
    <div class="d-flex mainPg">
      <!-- Img carousel -->
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block"
              src="../assets/pictures/screenShots of parkfinder/resized/pf-4.png"
              alt="First slide"
            >
          </div>
          <div class="carousel-item">
            <img
              class="d-block"
              src="../assets/pictures/screenShots of parkfinder/resized/pf-1.png"
              alt="First slide"
            >
          </div>
          <div class="carousel-item">
            <img
              class="d-block"
              src="../assets/pictures/screenshots of parkfinder/resized/pf-2.png"
              alt="Second slide"
            >
          </div>
          <div class="carousel-item">
            <img
              class="d-block"
              src="../assets/pictures/screenShots of parkfinder/resized/pf-3.png"
              alt="Third slide"
            >
          </div>
          <div class="carousel-item">
            <img
              class="d-block"
              src="../assets/pictures/screenShots of parkfinder/resized/pf-5.png"
              alt="First slide"
            >
          </div>
          <div class="carousel-item">
            <img
              class="d-block"
              src="../assets/pictures/screenshots of parkfinder/resized/pf-6.png"
              alt="Second slide"
            >
          </div>
          <div class="carousel-item">
            <img
              class="d-block"
              src="../assets/pictures/screenShots of parkfinder/resized/pf-7.png"
              alt="Third slide"
            >
          </div>
          <div class="carousel-item">
            <img
              class="d-block"
              src="../assets/pictures/screenShots of parkfinder/resized/pf-8.png"
              alt="First slide"
            >
          </div>
          <div class="carousel-item">
            <img
              class="d-block"
              src="../assets/pictures/screenshots of parkfinder/resized/pf-9.png"
              alt="Second slide"
            >
          </div>
          <div class="carousel-item">
            <img
              class="d-block"
              src="../assets/pictures/screenShots of parkfinder/resized/pf-10.png"
              alt="Third slide"
            >
          </div>
          <div class="carousel-item">
            <img
              class="d-block"
              src="../assets/pictures/screenShots of parkfinder/resized/pf-11.png"
              alt="Third slide"
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
      <div>
        <h1>ParkFinder</h1>
        <br>
        <h6>This app was built for the iPhone using Xcode and Swift. You are able to search for the parks throughout NYS using the map or the list inorder to find more information about it. You can add the park to your favorites for later and visit the parks website!</h6>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
import Navbar from "../components/navigation";
export default {
  name: "park finder app page",
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
#carouselExampleIndicators {
  margin-right: 25px;
  margin-left: 25px;
}
.carousel-control-prev {
  margin-left: 25px;
}
.carousel-control-next {
  margin-right: 25px;
}
#carouselExampleIndicators {
  width: 25%;
}
.carousel-inner {
  width: auto;
}
h6 {
  text-align: left;
  padding-top: 20px;
  margin-left: 5px;
  margin-right: 5px;
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
</style>