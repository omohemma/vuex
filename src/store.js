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
    events: [],
    total_events: 0
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event); // Push Event Into initial state
    },
    SET_EVENTS(state, events) {
      state.events = events; //events is a payload received after API calls
    },
    SET_EVENT_COUNT(state, total_events){
      state.total_events = total_events
    }
  },
  actions: {
    createEvent({commit}, event) {
      return EventService.postEvent(event) // Trigger postEvent to persist db.json
        .then(() => {
          commit('ADD_EVENT', event); // Destructure context object and update events in our state
        })
    },
    fetchEvents({commit}, {perPage, page}) {
      EventService.getEvents(perPage, page)
        .then(response => {
          console.log(response.headers['x-total-count'])
          commit('SET_EVENT_COUNT',response.headers['x-total-count']);
          commit('SET_EVENTS', response.data);
        })
        .catch(error => {
          console.log('There was an error:', error.response)
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
