<template>
  <div id="app">
    <!--img width="25%" src="./assets/logo.png"-->
    <pt-middle/>
  </div>
</template>

<script>
import PtMiddle from "./components/PtMiddle";

export default {
  name: "App",
  components: {
    "pt-middle": PtMiddle
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
