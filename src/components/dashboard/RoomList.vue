<template>
  <div class="chat_window body">
    <audio ref="audioElm" autoplay loop  id="playAudio">
        <source src="@/assets/bensound-buddy.mp3">
    </audio>
    <!-- <iframe src="@/assets/bensound-ukulele.mp3" allow="autoplay" style="display:none" id="iframeAudio">
    </iframe> -->
    <div class="chat-header">
      <div class="user">
        <img src="https://avatars.dicebear.com/api/avataaars/pikachu.svg?mood[]=happy" alt="avatar" />
        <div class="chat-about">
          <div class="chat-with">{{ logedInUser }}</div>
          <div class="chat-num-messages">memenangkan 10 pertandingan</div>
        </div>
      </div>
      <div class="">
        <button @click.prevent="createNewRoom" class="btn btn-sm btn-primary p-2">
          <i class="zmdi zmdi-group-work"></i> <span> CREATE ROOM </span>
        </button>
      </div>
    </div>
    <hr>
    <!-- <img src="https://avatars.dicebear.com/api/bottts/john.svg?mood[]=happy" alt=""> -->
    <div class="row clearfix">
      <div v-for="(room, i) in rooms" :key="i" class="col-lg-4 col-md-12">
        <div class="card small_mcard_1 bg-light">
          <div class="user">
            <img :src="roomImage(room.name)" alt="profile-image">
            <div class="details">
              <h6 class="mb-0 mt-2">{{ room.name }}</h6>
              <p class="mb-0"><strong>Hostname : {{ room.host }}</strong></p>
              <button @click.prevent="joinRoom(room.id)" class="btn btn-primary">JOIN</button>
            </div>
          </div>
          <div class="footer">
            <div class="progress-container progress-primary">
              <div class="d-flex ">
                <div class="p-1">
                  <strong><span class="progress-badge"> {{ room.players.length }} Players</span></strong>
                </div>
                <div class="ml-auto p-1">
                  <strong><span class="progress-badge">Win the game now</span></strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Room List -->
  </div>
</template>

<script>
// import backsound from '@/assets/bensound-ukulele.mp3'

export default {
  name: 'RoomList',
  computed: {
    rooms () {
      return this.$store.state.rooms
    },

    logedInUser () {
      return localStorage.getItem('username')
    },

    audioSource () {
      // const audio = ['../assets/bensound-ukulele.mp3', '../assets/bensound-buddy.mp3', '../assets/bensound-littleidea.mp3']
      return '../../assets/bensound-ukulele.mp3'
    }
  },

  created () {
    this.$socket.emit('getRooms')
  },

  watch: {
    rooms () {
      console.log('rooms added')
    }
  },

  data () {
    return {

    }
  },
  methods: {
    createNewRoom () {
      const hostname = localStorage.getItem('username')
      this.$socket.emit('createRoom', hostname)
    },

    fetchRooms () {
      // this.$socket.emit('userLogin', this.username)
    },

    roomImage (name) {
      return 'https://avatars.dicebear.com/api/bottts/' + name + '.svg?mood[]=happy'
    },

    joinRoom (roomId) {
      console.log(roomId)
      var a = this.$refs.audioElm
      if (a.play) {
        a.pause()
      }
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
}
</style>
