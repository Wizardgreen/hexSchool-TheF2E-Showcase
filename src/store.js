import Vue from 'vue'
import Vuex from 'vuex'
import {
  FETCH_EVENT_DATA,
  CHANGE_PAGE,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  SHOW_CONDITION_PANEL,
  HIDE_CONDITION_PANEL,
  APPLY_SEARCH_CONDITION,
} from './mutation/week2Filter.js';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    eventData: [],
    isSearching: false,
    currnentPage: 1,
    condition: {
      eventName: '',
      begDate: '',
      endDate: '',
      location: '',
    },
  },
  getters: {
    filteredByCondition: state => {
      const stringifyData = JSON.stringify(state.eventData);
      const trem = state.condition;
      let cache = JSON.parse(stringifyData);

      if (trem.eventName) {
        cache = cache.filter(data => data.title.indexOf(trem.eventName) != -1);
      };
      if (trem.begDate) {
        cache = cache.filter(data => {
          const eventDate = new Date(data.startDate).getTime();
          const begDate = new Date(trem.begDate).getTime();
          return eventDate > begDate;
        });
      };
      if (trem.endDate) {
        cache = cache.filter(data => {
          const eventDate = new Date(data.startDate).getTime();
          const endDate = new Date(trem.endDate).getTime();
          return eventDate < endDate;
        });
      };
      if (trem.location) {
        cache = cache.filter(data => data.showInfo[0].location.indexOf(trem.location) != -1);
      };
      return cache;
    },
    filteredAgainByPages: (state, getters) => {
      // if (!getters.filteredByCondition) {return}
      const num = state.currnentPage;
      return getters.filteredByCondition.filter((item, index) => {
        return index >= (num - 1) * 10 && index < num * 10;
      });
    },
    locationList: state => {
      if (!state.eventData) {return}
      const originList = state.eventData.map(data => {
        const str = data.showInfo[0].location;
        return str.substr(0, 3);
      });
      // 過濾重複資料
      const filtedList = new Set(originList);
      // 再過濾掉開頭是 '[' 的資料
      return [...filtedList].filter(data => data.substr(0, 1) != '[');
    },
    pages: (state, getters) => {
      const { length } = getters.filteredByCondition;
      return Math.ceil(length / 10);
    }
  },
  mutations: {
    [FETCH_EVENT_DATA]: (state, payload) => state.eventData = [...payload],
    [CHANGE_PAGE]: (state, newPageNumber) => state.currnentPage = newPageNumber,
    [PREVIOUS_PAGE]: state => state.currnentPage >= 2 ? state.currnentPage-- : null,
    [NEXT_PAGE]: state => {
      const pageLength = Math.ceil(state.eventData.length / 10);
      state.currnentPage < pageLength ? state.currnentPage++ : null;
    },
    [SHOW_CONDITION_PANEL]: state => state.isSearching = true,
    [HIDE_CONDITION_PANEL]: state => state.isSearching = false,
    [APPLY_SEARCH_CONDITION]: (state, newCondition) => state.condition = {...newCondition}
  },
  actions: {

  },
});
