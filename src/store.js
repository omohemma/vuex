import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: 123,
      name: 'Omololu Emmanuel'
    },
    categories: [
      'A',
      'B',
      'C',
      'D',
      'E',
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    catLength(state) {
      return state.categories.length
    }
  }
})
