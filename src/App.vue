<template>
<router-view/>
</template>

<script>
import VueRouter from "vue-router";
import PtMain from "./components/main/PtMain";
import PtGame from "./components/game/PtGame";
import axios from "axios";

const router = new VueRouter({
  routes: [
    { path: '/ptGame', component: PtGame },
     { path: '/ptMain', component: PtMain },
     { path: '/', redirect: '/ptMain' }
  ]});
router.replace()
export default {
  name: "App",
  router,
  props: {
    periodicTableData: Object
  },
/*  components: {
    
  },*/
  mounted() {
    axios
      .get(
        "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json"
      )
      .then(response => (this.periodicTableData = response));
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif, "Quicksand";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
