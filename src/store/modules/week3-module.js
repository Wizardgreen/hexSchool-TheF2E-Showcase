import * as types from '@/store/mutation-types/week3-types.js';

const state = {
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
        data: [40, 20, 12, 39, 25, 40, 39, 20, 40, 20, 12, 11],
      },
      {
        label: 'Angular',
        backgroundColor: 'rgba(251, 103, 134, .6)',
        borderColor: 'rgba(251, 103, 134)',
        borderWidth: '1px',
        data: [46, 28, 41, 39, 35, 64, 49, 50, 27, 30, 41, 38],
      },
      {
        label: 'React',
        backgroundColor: 'rgba(68, 164, 230, .6)',
        borderColor: 'rgba(68, 164, 230)',
        borderWidth: '1px',
        data: [20, 24, 32, 29, 55, 44, 19, 16, 32, 40, 48, 31],
      },
    ],
  },
  blackList: [],
};

const getters = {
  listScopedByPage: state => {
    const num = state.currentOrdersPage;
    return state.transactionList.filter((data, index) => {
      return index >= (num-1)*10 && index < (num*10)
    })
  },
};

const mutations = {
  [types.FETCH_TRANSACTION_LIST]: (state, payload) => state.transactionList = [...payload],
  [types.CHANGE_CURRENT_VIEW]: (state, target) => state.currentView = target,
  [types.CHANGE_ORDERS_PAGE]: (state, newPage) => state.currentOrdersPage = newPage,
  [types.FETCH_BLACK_LIST]: (state, payload) => state.blackList = payload,
  [types.REMOVE_BLACK_ONE]: (state, id) => state.blackList.splice(id - 1, 1), 
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
}
