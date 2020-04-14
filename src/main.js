import Vue from "vue";
import App from "./App.vue";
import VueKonva from "vue-konva";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(VueKonva);
Vue.use(VueRouter);

new Vue({
  render: h => h(App)
}).$mount("#app");
