import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user' // Import VueX Module
import * as event from './modules/event'

Vue.use(Vuex)

export default new Vuex.Store({
  // Register VueX Module
  modules: {
    user,
    event
  },
  state: {
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
  }
})
