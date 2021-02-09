import Vue from 'vue'
import Vuex from 'vuex'
import EventService from "./services/EventService"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {id: 'abc123', name: 'Adam Jahr'},
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: [
      {id: 1, title: '...', organizer: '...'},
      {id: 2, title: '...', organizer: '...'},
      {id: 3, title: '...', organizer: '...'},
      {id: 4, title: '...', organizer: '...'},
      {id: 5, title: '...', organizer: '...'}
    ]
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event); // Push Event Into mock DB.json
    }
  },
  actions: {
    createEvent({commit}, event) {
      return EventService.postEvent(event) // Trigger postEvent to persist db.json
        .then(() => {
          commit('ADD_EVENT', event); // Destructure context object and update events in our state
        })
    }
  },
  getters: {
    // currying
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
