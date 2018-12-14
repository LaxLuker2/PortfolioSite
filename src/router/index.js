import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home";
import Work from "@/components/work";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import ParkFinder from "@/projectPages/parkFinder.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/work",
      name: "work",
      component: Work
    },
    {
      path: "/skills",
      name: "skills",
      component: Skills
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/parkFinder",
      name: "parkFinder",
      component: ParkFinder
    }
  ]
});
