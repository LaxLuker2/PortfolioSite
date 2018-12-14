<template>
  <div class="hello">
    <navbar></navbar>
    <div class="mainPg">
      <h1>Contact Me</h1>

      <div id="formMail">
        <form
          name="contactForm"
          action="http://lukeschwarting.com/forms/formmail.php"
          method="POST"
        >
          <input type="hidden" name="recipients" value="lgs9654@rit.edu">
          <table>
            <tr>
              <th class="tableText">First Name:</th>
              <td>
                <input type="text" name="first_name" required>
              </td>
            </tr>
            <tr>
              <th class="tableText">Last Name:</th>
              <td>
                <input type="text" name="last_name" required>
              </td>
            </tr>
            <tr>
              <th class="tableText">Email:</th>
              <td>
                <input type="email" name="user_email" required>
              </td>
            </tr>
            <tr>
              <th class="tableText">Message:</th>
              <td>
                <textarea rows="7" cols="50"></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="Send">
              </td>
            </tr>
          </table>
        </form>
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
      msg: "Please Contact me! @..."
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

#formMail {
  padding-left: 25px;
}
</style>