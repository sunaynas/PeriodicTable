<template>
  <div>
    <pt-lt :periodicTableData="periodicTableData"/>
  </div>
</template>

<script>
// import Vue from "vue";
// import Element from "./Element";
let colorTable = {
  "alkali metal": "#ff6666",
  "alkaline earth metal": "#ffa64d",
  "post-transition metal": "#b5ff33",
  metalloid: "#33cc33",
  "polyatomic nonmetal": "#33ccff",
  "diatomic nonmetal": "#3399ff",
  "noble gas": "#c266ff"
};
let colorOverride = {
  H: "polyatomic nonmetal"
};
function getColor(pt) {
  let cat = colorOverride[pt.symbol] || pt.category;
  return colorTable[cat] || "#ffff66";
}
let ptLt = {
  render: function(createElement) {
    let r = [];
    let pt = this.periodicTableData[0];
    r.push(
      createElement("pt-element", {
        props: {
          sym: pt.symbol,
          atn: "" + pt.number,
          txt: pt.name,
          mss: "" + pt.atomic_mass,
          clr: getColor(pt)
        }
      })
    );
    r.push(
      createElement("pt-element", {
        style: { visibility: "hidden" },
        props: {
          sym: "",
          atn: "",
          txt: "",
          mss: "",
          clr: ""
        }
      })
    );
    for (let i = 2; i <= 3; i = i + 1) {
      let pt = this.periodicTableData[i];
      r.push(
        createElement("pt-element", {
          props: {
            sym: pt.symbol,
            atn: "" + pt.number,
            txt: pt.name,
            mss: "" + pt.atomic_mass,
            clr: getColor(pt)
          }
        })
      );
    }
    for (let i = 10; i <= 11; i = i + 1) {
      let pt = this.periodicTableData[i];
      r.push(
        createElement("pt-element", {
          props: {
            sym: pt.symbol,
            atn: "" + pt.number,
            txt: pt.name,
            mss: "" + pt.atomic_mass,
            clr: getColor(pt)
          }
        })
      );
    }
    return createElement(
      "div", // tag name
      {
        class: "pt-leftTop"
      },
      r
    );
  },
  props: {
    periodicTableData: {
      type: Array,
      required: true
    }
  }
};

export default {
  name: "PtLeftTop",
  props: {
    periodicTableData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      configPtStage: {
        width: 500,
        height: 500,
        x: 0,
        y: 0
      }
    };
  },
  components: {
    "pt-lt": ptLt
  }
};
</script>

<style scoped>
.pt-leftTop {
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: repeat(2, 55px);
  grid-template-rows: repeat(3, 70px);
}
.not-visible:true {
  visibility: false;
}
</style>