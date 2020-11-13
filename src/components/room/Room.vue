<template>
  <div id="room">
    <Player />
    <Question />
  </div>
</template>

<script>
import Player from '@/components/room/Player.vue'
import Question from '@/components/room/Question.vue'
export default {
  name: 'Room',
  components: {
    Player, Question
  },
  data () {
    return {
      roomname: ''
    }
  },
  methods: {
    createRoom () {
      const roomname = this.roomname
      this.$socket.emit('createRoom', roomname)
      const objCR = {
        roomname: this.roomname,
        name: localStorage.getItem('name')
      }
      this.$store.dispatch('createRoom', objCR).then(() => {
        this.$socket.emit('createRoom', roomname)
      })
    },
    getAllRoom () {
      // this.$store.dispatch('getAllRooms')
    }
  },
  mounted () {
    this.getAllRoom()
    this.$socket.on('fetchRoomUlang', () => {
      this.getAllRoom()
    })
  },
  computed: {
    semuaRoom () {
      console.log('list rooms updated', this.$store.state.allRooms)
      return this.$store.state.allRooms
    }
  }
}
</script>

<style>

</style>
