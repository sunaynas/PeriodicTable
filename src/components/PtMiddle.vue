<template>
  <div>
    <pt-mid :periodicTableData="periodicTableData"/>
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
  Po: "metalloid",
  Lv: "post-transition metal",
  Nh: "post-transition metal",
  Mc: "post-transition metal",
  At: "diatomic nonmetal",
  Ts: "diatomic nonmetal",
  Og: "noble gas"
};
function getColor(pt) {
  let cat = colorOverride[pt.symbol] || pt.category;
  return colorTable[cat] || "#ffff66";
}

let ptmid = {
  render: function(createElement) {
    let r = [];
    for (let i = 18; i <= 55; i = i + 1) {
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
    r.push(
      createElement("pt-element", {
        props: {
          sym: "",
          atn: "57-71",
          txt: "",
          mss: "",
          clr: "#ffb3ff"
        }
      })
    );
    for (let i = 71; i <= 87; i = i + 1) {
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
    r.push(
      createElement("pt-element", {
        props: {
          sym: "",
          atn: "89-103",
          txt: "",
          mss: "",
          clr: "#ff66cc"
        }
      })
    );
    for (let i = 103; i <= 117; i = i + 1) {
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
        class: "pt-middle"
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
  name: "PtMiddle",
  props: {
    periodicTableData: {
      type: Array,
      required: true
    }
  },
  components: {
    "pt-mid": ptmid
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
.pt-middle {
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: repeat(18, 55px);
  grid-template-rows: repeat(4, 70px);
}
</style>