<template>
  <div>
    <pt-element :config="ecfg" />
  </div>
</template>>

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
  H: "polyatomic nonmetal",
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

export default {
  name: "PtAutoElement",
  props: {
    atn: Number,
    clr: String,
    periodicTableData: {
      type: Array,
      required: true
    }
  },
  data() {
    let pt = this.periodicTableData["" + this.atn];
    console.log("--- REVAL for dt=" + this.atn);
    return {
      ecfg: {
        sym: pt.symbol,
        atn: "" + pt.number,
        txt: pt.name,
        mss: "" + pt.atomic_mass,
        clr: this.clr || getColor(pt)
      }
    };
  },
  methods: {
    handleChange() {
      console.log("--handleChange.");
    },
    onEnd() {
      console.log("--onEnd.");
    },
    onChange() {
      console.log("--onChanged.");
    },
    log: function(evt) {
      window.console.log('----ptae--',evt);
    }
  }
};
</script>>

<style scoped>
</style>