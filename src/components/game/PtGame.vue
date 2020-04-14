<template>
  <div>
    <div class="PtGameBoxes">
      <div class="pt-game-box-elements-c">
        <draggable v-model="gameBoard" class="row wrap pt-game-box-elements pt-game-box">
          <v-flex v-for="boxItm in gameBoard" :key="boxItm.idx" :name="boxItm.title">
            <draggable
              :list="boxItm.elems"
              :group="{name: 'boxItm' }"
              class="element-groups"
              :title="boxItm.title"
              :component-data="getElementData()"
              @change="log"
              @move="log"
            >
              <div v-for="el in boxItm.elems" :key="el" :name="el" @change="log">
                <pt-auto-element
                  v-bind:atn="el"
                  v-bind:key="el"
                  clr="white"
                  v-bind:periodicTableData="periodicTableData.data.elements"
                  @change="log"
                  @end="log"
                  @move="log"
                />
              </div>
            </draggable>
          </v-flex>
        </draggable>
      </div>
      <div class="pt-game-box-container">
        <div class="pt-game-box-empty pt-game-box">
          <pt-box
            v-for="boxItm in gameBoard"
            v-bind:key="boxItm.idx"
            v-bind:name="boxItm.title"
            v-bind:clr="boxItm.clr"
            v-bind:width="boxItm.bwidth"
            v-bind:height="boxItm.bheight"
          ></pt-box>
        </div>
      </div>
      <h1 class="score">SCORE: {{score}}</h1>
    </div>
  </div>
</template>>

<script>
import PtBox from "./PtBox";
//import PtGameElements from "./PtGameElements";
import axios from "axios";
import draggable from "vuedraggable";

export default {
  name: "PtGame",
  components: {
    "pt-box": PtBox,
    //    "pt-game-elements": PtGameElements,
    draggable
  },
  data() {
    return {
      score: 66,
      gameBoard: [
        {
          index: 1,
          title: "Metals",
          clr: "#99ddff",
          bwidth: 210,
          bheight: 280,
          elems: []
        },
        {
          index: 2,
          title: "Metalloids",
          clr: "#ffffb3",
          bwidth: 210,
          bheight: 280,
          elems: []
        },
        {
          index: 3,
          title: "Non-Metals",
          clr: "#ff9aa2",
          bwidth: 210,
          bheight: 280,
          elems: []
        },
        { index: 4, title: "Selection", bwidth: 350, bheight: 180, clr:"#99ff99", elems: [] }
      ]
    };
  },
  props: {
    periodicTableData: Object
  },
  methods: {
    getElementData() {
      return {
        on: {
          change: this.log,
          input: this.log,
          move: this.log
        }
      };
    },
    log: function(evt) {
      console.log("---ptg---", evt);
    }
  },
  mounted() {
    // add random elements to
    /*for (let a = 0; a <= 4; a++) {
     let .gameBoard[3].elems = [Math.floor(Math.random() * 117)];
    }*/
    let fruits = [];
    for (let a = 0; a <= 9; a++) {
      let newLength = fruits.push(Math.floor(Math.random() * 117));
    }

    this.gameBoard[3].elems = fruits
    axios
      .get(
        "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json"
      )
      .then(response => (this.periodicTableData = response));
  }
};
</script>


<style scoped>
.score {
  text-align: center;
  width: 300px;
}
.pt-game-box-container {
  position: absolute;
  z-index: 1;
}
.pt-game-box {
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: repeat(3, 230px);
  grid-template-rows: repeat(2, 350px);
}
.pt-game-box-empty {
  position: relative;
  top: 0px;
  left: 0px;
  z-index: 1;
}
.pt-game-box-elements {
  /* for box layout */
  display: grid;
  z-index: 100;
}
.pt-game-box-elements-c {
  position: relative;
  top: 70px;
  left: 10px;
  z-index: 100;
}
[name*="Metal"] .element-groups {
  position: relative;
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: repeat(3, 55px);
  grid-template-rows: repeat(5, 70px);
}
[name^="Selection"] .element-groups {
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: repeat(5, 55px);
  grid-template-rows: repeat(2, 70px);
}
.PtGameBoxes {
  /* For moving the score out */
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 750px);
}
</style>