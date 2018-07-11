import * as types from '@/store/mutation-types/sideQuest-types.js';

const state = {
  disasterList: [],
  currentLocation: '中正區',
  currentPage: 1,
  showPanel: false,
};
const getters = {
  FilteredByLocation: state => {
    const { currentLocation: local, disasterList: list } = state;
    return list.filter(event => event.CaseLocationDistrict == local);
  },
};
const mutations = {
  [types.FETCH_DISASTER_LIST]: (state, payload) => state.disasterList = payload,
  [types.CLOSE_PANEL]: state => state.showPanel = false,
  [types.SHOW_PANEL]: state => state.showPanel = true,
  [types.SEARCH_LOCATION_CONDITION]: (state, newLoacl) => state.currentLocation = newLoacl,
};
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}