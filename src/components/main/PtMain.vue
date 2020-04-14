<template>
  <div id="app" class="pt-all">
    <!--img width="25%" src="./assets/logo.png"-->
    <div class="pt-top">
      <pt-left-top :periodicTableData="periodicTableData.data.elements"/>
      <h2 class="pt-title">
        <h3 class="pt-TITLE">Sunayna's Periodic Table</h3>
        Click <router-link to="/ptGame">HERE</router-link> to play Sunayna's super cool game about metals, nonmetals and metalloids! </h2>
      <pt-right-top :periodicTableData="periodicTableData.data.elements"/>
    </div>
    <pt-middle :periodicTableData="periodicTableData.data.elements"/>
    <pt-bottom :periodicTableData="periodicTableData.data.elements"/>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import PtMiddle from "./PtMiddle";
import PtLeftTop from "./PtLeftTop";
import Element from "./Element";
import PtAutoElement from "./PtAutoElement";
import PtRightTop from "./PtRightTop";
import PtBottom from "./PtBottom";
import axios from "axios";

Vue.component("pt-element", Element);
Vue.component("pt-auto-element", PtAutoElement);
export default {
  name: "PtMain",
  props: {
    periodicTableData: Object
  },
  components: {
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
.pt-TITLE{
font-size: 30px;
  text-align: center;
}
.pt-title{
  font-size: 20px;
  text-align: left;
}
.pt-all {
  display: grid;
  grid-row-gap: 10px;
  grid-template-rows: 230px 350px 100px;
}
.pt-top {
  display: grid;
  grid-template-columns: 200px 580px 600px;
}
</style>
