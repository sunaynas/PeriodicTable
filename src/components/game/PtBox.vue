<template>
  <div class="pt-game-box-main">
    <v-stage class="pt-game-box-stage" :config="configMetalStage">
      <v-layer>
        <v-text :config="metalText" />
        <v-rect :config="metalRect"></v-rect>ƒ
      </v-layer>
    </v-stage>
  </div>
</template>>

<script>
export default {
  name: "PtBox",
  props: {
    name: String,
    clr: String,
    width: Number,
    height: Number
  },
  data() {
    return {
      configMetalStage: {
        width: this.width + 20,
        height: this.height + 70
      },
      metalText: {
        text: this.name,
        fontSize: 40,
        align: "center",
        width: 200,
        fontFamily: "Quicksand",
        y: 5,
        x: 5
      },
      metalRect: {
        x: 5,
        y: 50,
        width: this.width,
        height: this.height,
        fill: this.clr,
        stroke: "#000033",
        strokeWidth: 1,
        cornerRadius: 15,
        shadowEnabled: "true",
        shadowColor: "#001f4d",
        shadowOffsetX: 7,
        shadowOffsetY: 7,
        shadowBlur: 3
      }
    };
  }
};
</script>>

<style scoped>
.pt-game-box-main {
  position: relative;
}
.pt-game-box-stage {
  position: absolute;
  top: 0px;
  left: 0px;
}
.pt-game-elem {
  position: absolute;
  top: 80px;
  left: 20px;
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: repeat(3, 55px);
  grid-template-rows: repeat(5, 70px);
  z-index: 100;
}
</style>