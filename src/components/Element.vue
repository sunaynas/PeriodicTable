<template>
  <div class="elements">
    <div>
      <v-stage :config="configStage">
        <v-layer>
          <v-rect :config="configRect"/>
          <v-text :config="configSymbol"/>
          <v-text :config="configNumber"/>
          <v-text :config="configName"/>
          <v-text :config="configMass"/>
        </v-layer>
      </v-stage>
    </div>
  </div>
</template>

<script>
export default {
  name: "Element",
  props: {
    sym: String,
    atn: String,
    txt: String,
    mss: String,
    clr: String
  },
  data() {
    return {
      configStage: {
        width: 120,
        height: 150,
        x: 5,
        y: 0
      },
      configRect: {
        x: 0,
        y: 0,
        width: 110,
        height: 140,
        stroke: "#000066",
        strokeWidth: 1,
        fill: this.clr,
        cornerRadius: 20,
        shadowEnabled: "true",
        shadowColor: "#808080"
      },
      configSymbol: {
        text: this.sym,
        fontSize: 50,
        width: 110,
        align: "center",
        fontStyle: "bold",
        fontFamily: "'Monaco'",
        y: 37
      },
      configNumber: {
        text: this.atn,
        fontSize: 24,
        width: 110,
        align: "left",
        y: 9,
        x: 10
      },
      configName: {
        text: this.txt,
        fontSize: 23,
        width: 110,
        align: "center",
        y: 87
      },
      configMass: {
        text: this.mss,
        width: 110,
        align: "center",
        y: 115,
        fontSize: 16
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.potato {
  color: red;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
