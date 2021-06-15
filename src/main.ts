import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import store from "./store";
import VueAlertify from "vue-alertify";

Vue.config.productionTip = false;

Vue.use(VueAlertify, {
  notifier: {
    delay: 5,
    position: "top-right",
    closeButton: false,
  },
});

Vue.use(Vuex);

new Vue({
  store,
  router,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");