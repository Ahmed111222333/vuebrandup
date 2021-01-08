import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import "bootstrap";
import "bootstrap-v4-rtl/dist/js/bootstrap.js";
import "bootstrap-v4-rtl/dist/css/bootstrap.css";
import "../../css/style.css";
//import "./scss/style.scss";
Vue.config.productionTip = false;
Vue.use(Vuex);
new Vue({
  render: h => h(App)
}).$mount("#app");
