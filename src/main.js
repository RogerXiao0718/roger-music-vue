import Vue from "vue";
import App from "./App.vue";
import VueYoutube from "vue-youtube";
import Vue2TouchEvents from "vue2-touch-events";

Vue.config.productionTip = false;

Vue.use(VueYoutube);
Vue.use(Vue2TouchEvents);

new Vue({
  render: h => h(App)
}).$mount("#app");
