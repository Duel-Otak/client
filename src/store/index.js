import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    username: '',
    onlineUsers: [],
    currentRoom: '',
    soals: []
  },

  mutations: {
    SOCKET_USER_LOGIN (state, onlineUsers) {
      state.username = localStorage.getItem('username')
      state.onlineUsers = onlineUsers
    },
    SOCKET_LIST_ROOMS (state, rooms) {
      state.rooms = rooms
    },
    SOCKET_LIST_SOAL (state, soal) {
      state.soals = soal
    },

    setRoom (state, room) {
      state.currentRoom = room
    },

    addPlayerToRoom (state, roomId) {
      // const indexRoom = state.rooms.filter((room, i) => {
      //   return i
      // })
      // state.rooms[i].players.push({username: localStorage.getItem('username'), isWinner: false})
    }
    // ROOM_LIST (state, rooms) {
    //   username = '',
    //   onlineUsers = [],
    //   rooms = []
    // }
  },
  actions: {
    ROOM_LIST (rooms) {
      this.sockets.subscribe('ROOM_LIST', (rooms) => {
        console.log(rooms)
      })
    },

    setCurrentRoom (context, room) {
      context.commit('setRoom', room)
    },

    addPlayersToRoom (context, roomid) {
      context.commit('addPlayerToRoom')
    }
  },
  modules: {
  }
})
