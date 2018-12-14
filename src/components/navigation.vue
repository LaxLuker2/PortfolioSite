<template>
  <div class="sidenav">
    <img src="../assets/img/brand-LTB.png" alt="LS Logo" height="75px">
    <router-link to="/">About Me</router-link>
    <router-link to="/work">Work</router-link>
    <router-link to="/skills">Skills</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
</template>
<script>
export default {
  name: "navbar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Navbar */
img {
  width: 100%;
  padding-left: 30px;
  padding-right: 40px;
  margin-bottom: 20px;
}

.sidenav {
  height: 100%;
  width: 180px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
  text-decoration: underline;
  text-decoration-color: aqua;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
</style>