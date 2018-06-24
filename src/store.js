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

import {
  FETCH_TRANSACTION_LIST,
  CHANGE_CURRENT_VIEW,
  CHANGE_ORDERS_PAGE,
  FETCH_BLACK_LIST,
  REMOVE_BLACK_ONE,
} from './mutation/week3AdminOrder.js';

Vue.use(Vuex)

const week2 = {
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
      }
      if (trem.begDate) {
        cache = cache.filter(data => {
          const eventDate = new Date(data.startDate).getTime();
          const begDate = new Date(trem.begDate).getTime();
          return eventDate > begDate;
        });
      }
      if (trem.endDate) {
        cache = cache.filter(data => {
          const eventDate = new Date(data.startDate).getTime();
          const endDate = new Date(trem.endDate).getTime();
          return eventDate < endDate;
        });
      }
      if (trem.location) {
        cache = cache.filter(data => {
          if (data.showInfo[0]) { // 因為有的資料內根本沒提供相關訊息，所以 undefine 就略過
            return data.showInfo[0].location.indexOf(trem.location) != -1;
          }
        });
      }
      return cache;
    },
    filteredAgainByPages: (state, getters) => {
      const num = state.currnentPage;
      return getters.filteredByCondition.filter((item, index) => {
        return index >= (num - 1) * 10 && index < num * 10;
      });
    },
    locationList: state => {
      let list = state.eventData
        .map(item => item.showInfo[0])  // 取出陣列中的細節資料
        .filter(item => Boolean(item))  // 如果該資料有 undefine 就篩掉，被這裡卡了兩個晚上，氣死我
        .map(item => {  // 如果開頭有'['，就把它移除
          if (item.location.substr(0, 1) == '[') { return item.location.slice(1) }
          else { return item.location; }
        })
        .map(item => item.substr(0, 3)); // 取出前三個字
      const filtedList = new Set(list); 
      // 透過 Set 的特性，來過濾重複資料，但因他是 array-like ，所以在用 ...組回array
      return [...filtedList];
    },
    pages: (state, getters) => {
      const { length } = getters.filteredByCondition;
      return Math.ceil(length / 10);
    },
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
    [APPLY_SEARCH_CONDITION]: (state, newCondition) => state.condition = {...newCondition},
  },
};

const week3 = {
  state: {
    currentView: 'Overview',
    currentOrdersPage: 1,
    transactionList: [],
    chartData: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Vue',
          backgroundColor: 'rgba(81, 192, 191, .6)',
          borderColor: 'rgba(81, 192, 191)',
          borderWidth: '1px',
          data: [40, 20, 12, 39, 25, 40, 39, 20, 40, 20, 12, 11]
        },
        {
          label: 'Angular',
          backgroundColor: 'rgba(251, 103, 134, .6)',
          borderColor: 'rgba(251, 103, 134)',
          borderWidth: '1px',
          data: [46, 28, 41, 39, 35, 64, 49, 50, 27, 30, 41, 38]
        },
        {
          label: 'React',
          backgroundColor: 'rgba(68, 164, 230, .6)',
          borderColor: 'rgba(68, 164, 230)',
          borderWidth: '1px',
          data: [20, 24, 32, 29, 55, 44, 19, 16, 32, 40, 48, 31]
        },
      ]
    },
    blackList: [],
  },
  getters: {
    listScopedByPage: state => {
      const num = state.currentOrdersPage;
      return state.transactionList.filter((data, index) => {
        return index >= (num-1)*10 && index < (num*10)
      })
    }
  },
  mutations: {
    [FETCH_TRANSACTION_LIST]: (state, payload) => state.transactionList = [...payload],
    [CHANGE_CURRENT_VIEW]: (state, target) => state.currentView = target,
    [CHANGE_ORDERS_PAGE]: (state, newPage) => state.currentOrdersPage = newPage,
    [FETCH_BLACK_LIST]: (state, payload) => state.blackList = payload,
    [REMOVE_BLACK_ONE]: (state, id) => state.blackList.splice(id - 1, 1), 
  },
}

export default new Vuex.Store({
  modules: {
    week2,
    week3,
  },
});
