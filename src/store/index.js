import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    room: []
  },
  mutations: {
    fetchAllRoom (state) {
      state.room = this.room
    }
  },
  actions: {
    createRoom (context, payload) {
      this.room.push(payload.name)
      context.dispatch('fetchAllRoom')
    },
    fetchAllRoom (context) {
      context.commit('fetchAllRoom')
    }
  },
  modules: {
  }
})
