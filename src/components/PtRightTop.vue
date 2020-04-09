<template>
  <div>
    <pt-rt :periodicTableData="periodicTableData"/>
  </div>
</template>

<script>
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
let ptrt = {
  render: function(createElement) {
    let r = [];
    for (let i = 0; i < 5; i++) {
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
    }
    let pt = this.periodicTableData[1];
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

    for (let i = 4; i <= 9; i = i + 1) {
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
    for (let i = 12; i <= 17; i = i + 1) {
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
        class: "pt-rightTop"
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
  name: "PtRightTop",
  props: {
    periodicTableData: {
      type: Array,
      required: true
    }
  },
  components: {
    "pt-rt": ptrt
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
  }
};
</script>

<style scoped>
.pt-rightTop {
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: repeat(6, 55px);
  grid-template-rows: repeat(3, 70px);
}
.not-visible:true {
  visibility: false;
}
</style>