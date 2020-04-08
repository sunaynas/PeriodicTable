<template>
  <div>
    <pt-potato :periodicTableData="periodicTableData"></pt-potato>
    <div class="pt-middle2">
      <!--pt-element sym="Ti" atn="22" txt="Titanium" mss="47.867" clr="#66a3ff"></pt-element>
      <pt-element sym="V" atn="23" txt="Vanadium" mss="50.9415" clr="#66a3ff"></pt-element>
      <pt-element sym="Cr" atn="24" txt="Chromium" mss="51.9961" clr="#66a3ff"></pt-element>
      <pt-element sym="Mn" atn="25" txt="Manganese" mss="54.938044" clr="#66a3ff"></pt-element>
      <pt-element sym="Fe" atn="26" txt="Iron" mss="55.845" clr="#66a3ff"></pt-element>
      <pt-element sym="Co" atn="27" txt="Cobalt" mss="58.933" clr="#66a3ff"></pt-element>
      <pt-element sym="Ni" atn="28" txt="Nickel" mss="58.693" clr="#66a3ff"></pt-element-->
    </div>
    <!--div>{{ periodicTableData }}</div-->
  </div>
</template>

<script>
import Vue from "vue";
import Element from "./Element";
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
Vue.component("pt-element", Element);

Vue.component("pt-potato", {
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
});

export default {
  name: "PtMiddle",
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