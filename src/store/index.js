import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: []
  },
  
  mutations: {
    SOCKET_USER_LOGIN (state, onlineUsers) {
      state.username = localStorage.getItem('username')
      state.onlineUsers = onlineUsers
    },
    SOCKET_LIST_ROOMS (state, rooms) {
      state.rooms = rooms
    },
    ROOM_LIST (state, rooms) {
      state.username = '',
      onlineUsers = [],
      rooms = []
    }
  },
  actions: {
    ROOM_LIST (rooms) {
      this.sockets.subscribe('ROOM_LIST', (rooms) => {
        console.log(rooms)
      })
    }
  },
  modules: {
  }
})
