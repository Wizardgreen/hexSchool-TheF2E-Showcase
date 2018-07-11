import * as types from '@/store/mutation-types/week2-types.js';

const state = {
  eventData: [],
  isSearching: false,
  currnentPage: 1,
  condition: {
    eventName: '',
    begDate: '',
    endDate: '',
    location: '',
  },
};

const getters = {
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
      cache = cache.filter(data => data.showInfo[0].location.indexOf(trem.location) != -1);
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
};

const mutations = {
  [types.FETCH_EVENT_DATA]: (state, payload) => state.eventData = [...payload],
  [types.CHANGE_PAGE]: (state, newPageNumber) => state.currnentPage = newPageNumber,
  [types.PREVIOUS_PAGE]: state => state.currnentPage >= 2 ? state.currnentPage-- : null,
  [types.NEXT_PAGE]: state => {
    const pageLength = Math.ceil(state.eventData.length / 10);
    state.currnentPage < pageLength ? state.currnentPage++ : null;
  },
  [types.SHOW_CONDITION_PANEL]: state => state.isSearching = true,
  [types.HIDE_CONDITION_PANEL]: state => state.isSearching = false,
  [types.APPLY_SEARCH_CONDITION]: (state, newCondition) => state.condition = {...newCondition},
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
