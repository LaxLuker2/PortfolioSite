<template>
  <div class="hello">
    <navbar></navbar>
    <div class="mainPg">
      <h1>Luke Schwartings Portfolio Site</h1>

      <div>
        <p class="contentText">
          Hello, My name is Luke Schwarting. I am a 5th year at
          <a
            href="http://www.rit.edu"
            class="inlineLink"
          >Rochester Institute of Technology.</a> I am graduating in May of 2019 with a degree in New Media Interactive Development at RIT. I chose this field because I have a passion for building web/mobile applications and software due to the idea of people using these applications that I have built to help them throughout their day. I am seeking a full time positon in front end web/mobile application development or software developer position. I have a passion for programming, and I am excited about web and mobile programming.
        </p>

        <p
          class="contentText"
        >I have played lacrosse and football since I was 5. While at RIT I play for the mens' club lacrosse team. Playing sports allowed me to become a great leader. I was captain on both Lacrosse and Football. This taught me how to lead, be a spokesman, and take on responsibility for what happens. Playing sports and being in school taught me time management between my studies and playing.</p>

        <p
          class="contentText"
        >Growing up in a small town and with how my parents brought me up, I have a strong work ethic. Meaning that, I do not give up until the job is completed. If my name is going to be on it, then I make sure it is perfect because I expect perfection.</p>
      </div>

      <!-- <p>{{ msg }}</p> -->
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
      msg: "Write About Me?"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inlineLink {
  text-decoration: none;
  font-weight: bold;
  color: black;
}
.contentText {
  text-align: left;
  font-size: 16px;
  padding-left: 25px;
  padding-right: 25px;
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
