import Vue from 'vue';
import ElementUI from 'element-ui';
import * as VueGoogleMaps from "vue2-google-maps";
import App from './App.vue';
import router from './router';
import store from './store/';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCqjuAgsIgDh09yJ6UFpQPWLdo2rZGQ3F4",
    libraries: "places",
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
