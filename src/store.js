import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [
      {id: 1, title: '...', organizer: '...'},
      {id: 2, title: '...', organizer: '...'},
      {id: 3, title: '...', organizer: '...'},
      {id: 4, title: '...', organizer: '...'},
      {id: 5, title: '...', organizer: '...'},
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    // currying
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    }
  }
})
