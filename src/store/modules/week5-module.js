import * as types from '@/store/types/week5-type.js';

const state = {
  comicData: {},
  currentView: 'overview',
  currentIssue: '1',
  currentPage: '1',
};

const getters = {};

const mutations = {
  [types.FETCH_COMIC_DATA]: (state, payload) => state.comicData = {...payload},
  [types.CHANGE_CURRENT_VIEW]: (state, mode) => state.currentView = mode,
  [types.CHANGE_CURRENT_ISSUE]: (state, issueId) => {
    state.currentIssue = issueId;
    state.currentPage = '1';
  },
  [types.CHANGE_CURRENT_PAGE]: (state, pageNth) => state.currentPage = pageNth,
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
