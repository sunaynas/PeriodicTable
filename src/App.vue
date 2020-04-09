<template>
  <div id="app" class="pt-all">
    <!--img width="25%" src="./assets/logo.png"-->
    <div class="pt-top">
      <pt-left-top :periodicTableData="periodicTableData.data.elements"/>
      <pt-right-top :periodicTableData="periodicTableData.data.elements"/>
    </div>
    <pt-middle :periodicTableData="periodicTableData.data.elements"/>
    <pt-bottom :periodicTableData="periodicTableData.data.elements"/>
  </div>
</template>

<script>
import Vue from "vue";
import PtMiddle from "./components/PtMiddle";
import PtLeftTop from "./components/PtLeftTop";
import Element from "./components/Element";
import PtRightTop from "./components/PtRightTop";
import PtBottom from "./components/PtBottom";
import axios from "axios";

Vue.component("pt-element", Element);
export default {
  name: "App",
  props: {
    periodicTableData: Object
  },
  components: {
    "pt-element": Element,
    "pt-middle": PtMiddle,
    "pt-left-top": PtLeftTop,
    "pt-right-top": PtRightTop,
    "pt-bottom": PtBottom
  },
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
.pt-all {
  display: grid;
  grid-row-gap: 10px;
  grid-template-rows: 230px 350px 100px;
}
.pt-top {
  display: grid;
  grid-template-columns: 780px 600px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
