<template>
  <div class="pt-middle">
    <pt-element sym="Fe1" atn="26" txt="Iron" mss="55.845" clr="#66a3ff"></pt-element>
    <pt-element sym="Co1" atn="27" txt="Cobalt" mss="58.933" clr="#66a3ff"></pt-element>
    <pt-element sym="Fe3" atn="26" txt="Iron" mss="55.845" clr="#66a3ff"></pt-element>
    <pt-element sym="Co4" atn="27" txt="Cobalt" mss="58.933" clr="#66a3ff"></pt-element>
    <pt-element sym="Fe5" atn="26" txt="Iron" mss="55.845" clr="#66a3ff"></pt-element>
    <pt-element sym="Co6" atn="27" txt="Cobalt" mss="58.933" clr="#66a3ff"></pt-element>
    <pt-element sym="Fe7" atn="26" txt="Iron" mss="55.845" clr="#66a3ff"></pt-element>
    <pt-element sym="Co8" atn="27" txt="Cobalt" mss="58.933" clr="#66a3ff"></pt-element>
  </div>
</template>

<script>
import Vue from "vue";
import Element from "./Element";
Vue.component("pt-element", Element);
export default {
  name: "PtMiddle",
  props: {}
};
</script>

<style scoped>
.pt-middle {
  display: grid;
  grid-template-columns: 120px 120px 120px 120px;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
}
</style>