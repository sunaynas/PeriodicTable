<template>
  <div id="app">
    <!--img width="25%" src="./assets/logo.png"-->
    <pt-middle :periodicTableData="periodicTableData.data.elements"/>
  </div>
</template>

<script>
import PtMiddle from "./components/PtMiddle";
import axios from "axios";

export default {
  name: "App",
  props: {
    periodicTableData: Object
  },
  components: {
    "pt-middle": PtMiddle
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
