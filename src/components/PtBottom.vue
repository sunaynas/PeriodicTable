<template>
  <div class="pt-bottom-grid">
    <div></div>
    <pt-bottom :periodicTableData="periodicTableData"/>
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
  "noble gas": "#c266ff",
  lanthanide: "#ffb3ff",
  actinide: "#ff66cc"
};
let colorOverride = {
  H: "polyatomic nonmetal"
};
function getColor(pt) {
  let cat = colorOverride[pt.symbol] || pt.category;
  return colorTable[cat] || "#ffff66";
}
let ptbottom = {
  render: function(createElement) {
    let r = [];

    for (let i = 56; i <= 70; i = i + 1) {
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

    for (let i = 88; i <= 102; i = i + 1) {
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
        class: "pt-bottom"
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
  name: "PtBottom",
  props: {
    periodicTableData: {
      type: Array,
      required: true
    }
  },
  components: {
    "pt-bottom": ptbottom
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
.pt-bottom-grid {
  display: grid;
  grid-template-columns: 130px 100px;
}
.pt-bottom {
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: repeat(15, 55px);
  grid-template-rows: repeat(2, 70px);
}
.not-visible:true {
  visibility: false;
}
</style>