import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {id: 1, text: '...', done: true},
      {id: 2, text: '...', done: false},
      {id: 3, text: '...', done: true},
      {id: 4, text: '...', done: true},
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    doneTodos(state) {
      return state.todos.filter(todo => todo.done);
    },
    activeTodosLength(state) {
      return state.todos.filter(todo => !todo.done).length;
    },
  }
})
