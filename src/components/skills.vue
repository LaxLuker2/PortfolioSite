<template>
  <div class="hello">
    <navbar></navbar>
    <div class="mainPg">
      <img src="../assets/resume/LukeSchwarting-Resume.jpg" width="65%" height="75%">
    </div>
  </div>
</template>

<script>
import Navbar from "./navigation";
export default {
  name: "HelloWorld",
  components: { Navbar },
  data() {
    return {
      msg: "My Resume"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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