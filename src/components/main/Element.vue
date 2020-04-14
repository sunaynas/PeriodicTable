<template>
  <div class="elements">
    <div>
      <v-stage :config="configStage">
        <v-layer @mousemove="handleMouseMove" @mouseout="handleMouseOut">
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
//
<script>
export default {
  name: "Element",
  props: {
    sym: String,
    atn: String,
    txt: String,
    mss: String,
    clr: String,
    zoomOnHover: Boolean,
    config: Object
  },
  data() {
    let clr = this.clr;
    let sym = this.sym;
    let atn = this.atn;
    let txt = this.txt;
    let mss = this.mss;
    if (this.config) {
      clr = this.config.clr;
      sym = this.config.sym;
      atn = this.config.atn;
      txt = this.config.txt;
      mss = this.config.mss;
    }
    return {
      configStage: {
        width: 150,
        height: 150,
        x: 5,
        y: 0,
        scaleX: 0.5,
        scaleY: 0.5,
        offsetX: 0,
        offsetY: -7
      },
      configRect: {
        x: 0,
        y: 0,
        width: 110,
        height: 140,
        stroke: "#000033",
        strokeWidth: 1,
        fill: clr,
        cornerRadius: 15,
        shadowEnabled: "true",
        shadowColor: "#001f4d",
        shadowOffsetX: 7,
        shadowOffsetY: 7,
        shadowBlur: 3
      },
      configSymbol: {
        text: sym,
        fontSize: 50,
        width: 110,
        align: "center",
        fontStyle: "bold",
        fontFamily: "'Quicksand'",
        y: 37
      },
      configNumber: {
        text: atn,
        fontSize: 24,
        width: 110,
        align: "left",
        y: 9,
        fontFamily: "Quicksand",
        x: 10
      },
      configName: {
        text: txt,
        fontSize: 18,
        width: 110,
        align: "center",
        fontFamily: "Quicksand",
        y: 87
      },
      configMass: {
        text: mss,
        width: 110,
        align: "center",
        y: 115,
        fontFamily: "Quicksand",
        fontSize: 16
      }
    };
  },
  methods: {
    handleMouseMove(event) { // eslint-disable-line
      if (!this.inZoomMode) {

        this.configStage.scaleX = 0.6;
        this.configStage.scaleY = 0.6;
        this.configStage.offsetX = 5;
        this.configStage.offsetY = -2;
        this.configStage.width = this.configStage.scaleX * 150;
        this.configStage.height = this.configStage.scaleY * 150;
        this.$el.style.zIndex = 1;
        this.inZoomMode = true;
      } 
    },
    handleMouseOut(event) { // eslint-disable-line
      this.configStage.scaleX = 0.5;
      this.configStage.scaleY = 0.5;
      this.configStage.offsetX = 0;
      this.configStage.offsetY = -7;
      this.configStage.width = this.configStage.scaleX * 150;
      this.configStage.height = this.configStage.scaleY * 150;
      this.$el.style.zIndex = 100;
      this.inZoomMode = false;
    }
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
