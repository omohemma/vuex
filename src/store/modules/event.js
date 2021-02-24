//  Alternative One - vuex getters. state, mutations and actions as private variables & methods as constant

import EventService from '../../services/EventService'

export const namespaced =  true; //Namespacing Event Module

export const state = {
  events: [],
  total_events: 0,
  event: {}
}

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event) // Push Event Into initial state
  },
  SET_EVENTS(state, events) {
    state.events = events //events is a payload received after API calls
  },
  SET_EVENT_COUNT(state, total_events) {
    state.total_events = total_events
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}

export const actions = {
  createEvent({ commit, dispatch, rootState }, event) {
    return EventService.postEvent(event) // Trigger postEvent to persist db.json
      .then(() => {
        console.log('User Creating Event is ' + rootState.user.user.name) // Accessing Another Module's State
        
        dispatch('ActionToCall') // Call action from Another Module - Drawback Name Collision 
        dispatch('moduleName/ActionToCall', null, {root :true}) // Call action from Another Module - VueX Module Namespacing. Null is Module Payload

        commit('ADD_EVENT', event) // Destructuring context object and update events in our state
      })
  },
  fetchEvents({ commit }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then(response => {
        console.log(response.headers['x-total-count'])
        commit('SET_EVENT_COUNT', response.headers['x-total-count'])
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },
  fetchEvent({ commit, getters }, eventId) {
    /**
     * Create VueX State (Like Vue Template's Data object)
     * Create Mutation Function to change state with API data response
     * Code Lift API Calls code from Vue template to VueX Actions
     * Commit Mutation with Response Data
     * Check if event is in events state
     * if true commit mutation data into event data
     */

    let event = getters.getEventById(eventId)

    if (event) {
      commit('SET_EVENT', event)
    } else {
      EventService.getEvent(eventId)
        .then(response => {
          // this.event = response.data
          commit('SET_EVENT', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  }
}

export const getters = {
  // currying
  getEventById: state => id => {
    return state.events.find(event => event.id === id)
  }
}
