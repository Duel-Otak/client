import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    onlineUsers: []
  },
  mutations: {
    SOCKET_USER_LOGIN (state, onlineUsers) {
      state.username = localStorage.getItem('username')
      state.onlineUsers = onlineUsers
    }
  },
  actions: {
  },
  modules: {
  }
})
