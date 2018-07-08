import Vue from 'vue'
import Vuex from 'vuex'
import week2 from '@/store/modules/week2-module.js';
import week3 from '@/store/modules/week3-module.js';
import week5 from '@/store/modules/week5-module.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    week2,
    week3,
    week5,
  },
});
