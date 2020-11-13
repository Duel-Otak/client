import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: []
  },
  mutations: {
    ROOM_LIST (rooms) {
      console.log(rooms)
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
