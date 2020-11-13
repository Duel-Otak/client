<template>
  <div class="chat_window body">
    <div class="d-flex">
      <div class="p-2">
        <div class="chat-header">
          <div class="d-flex justify-content-between mr-auto">
            <div class="user text-left">
              <div class="chat-about">
                <div class="chat-with">Nama Room</div>
                <div class="chat-num-messages">2 Player</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ml-auto p-2">
        <!-- Menggunakan V-IF -->
        <button class="btn btn-primary btn-lg">START</button>
        <div class="bg-green flex-fill bd-highlight float-right text-center m-1" style="width: 120px; height: 42px">
          <h5 class="p-2">Score : 83</h5>
        </div>
      </div>
    </div>
    <div class="chat-header">
      <a href="javascript:void(0);" class="list_btn btn btn-info btn-round float-md-right"><i
          class="zmdi zmdi-comments"></i></a>
    </div>
    <hr>
    <!-- Blur Imaage HIlang ketika Start section-blur -->
    <div class="col-lg-12 col-md-12 ">
      <div class="progress m-b-5">
          <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80% Complete (danger)</span> </div>
      </div>
      <div class="card mcard_3">
        <div class="header l-cyan">
            <strong class="text-dark p-2"> {{ soals.soal }}</strong>
        </div>
        <div class="body">
          <!-- <div class="member-img">
            <a href="profile.html"><img src="@/assets/bg-timer.jpg" width="100px" height="100px" class="rounded-circle img-raised"
                alt="profile-image"></a>
          </div> -->
          <hr>
          <div class="row">
            <div class="col-6">
              <button @click.prevent="answer(true)" class="btn btn-success btn-lg" style="width:100%;">Betul</button>
            </div>
            <div class="col-6">
              <button @click.prevent="answer(false)" class="btn btn-danger btn-lg" style="width:100%;">Salah</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Room from './Room'
export default {
  name: 'gamePage',
  components: {
  },
  data () {
    return {
      currentSoal: [],
      randomIndexnya: null,
      username: localStorage.getItem('name'),
      score: 0,
      jumlahSoal: 0,
      show: true,
      soalKe: 1
    }
  },

  created () {
    this.getSoal()
  },

  methods: {
    getSoal () {
      this.$socket.emit('getSoal', this.username)
    },

    answer (jawaban) {
      if (this.soalKe > 8) {
        this.$router.push('/game-over')
      } else {
        console.log(jawaban)
        if (jawaban === this.soals.jawab) {
          console.log('benar')
        } else {
          console.log('jawaban salah')
        }
      }
      this.soalKe++
    }

    // getSoals () {
    //   this.$store.dispatch('getSoals')
    // },
    // randomIndex () {
    //   const indexRandom = Math.floor(Math.random() * this.allSoal.length)
    //   this.randomIndexnya = indexRandom
    //   this.$socket.emit('randomIndex', indexRandom)
    // },
    // cekJawab (jawaban) {
    //   if (jawaban === this.randomSoal.jawab) {
    //     this.show = false
    //     // console.log("masuk benar");
    //     this.score += 1
    //   } else if (jawaban !== this.randomSoal.jawab) {
    //     this.show = false
    //     // console.log("masuk salah");
    //     // this.score -= 1;
    //   }
    //   this.show = true
    //   this.randomIndex()
    // }
  },
  mounted () {
    this.$socket.emit('getSoal', this.username)
    // this.getSoals()
    // this.randomIndex()
    // // const room = this.$route.params.name
    // this.$socket.on('gameover', (menang) => {
    //   this.$router.push('/winlose')
    //   this.$store.commit('setwinner', menang)
    //   this.$store.state.userScore = this.score
    // })
    // this.$socket.on('changeIndex', (index) => {
    //   console.log('masuk  mounted')
    //   this.randomIndexnya = index
    // })
  },
  computed: {
    soals () {
      const x = this.$store.state.soals
      return x[this.soalKe]
    }
    // allSoal () {
    //   return this.$store.state.allSoals
    // },
    // randomSoal () {
    //   const i = this.randomIndexnya
    //   return this.allSoal[i]
    // },
    // jumlahSoalnya () {
    //   return this.jumlahSoal
    // }
  },

  watch: {
    // randomSoal (oldVal, newVal) {
    //   if (oldVal !== newVal) {
    //     this.jumlahSoal += 1
    //   }
    // },
    // jumlahSoalnya () {
    //   if (this.score === 5) {
    //     const objMng = {
    //       winner: localStorage.getItem('name'),
    //       roomname: this.$route.params.name
    //     }
    //     this.$socket.emit('adayangmenang', objMng)
    //     this.$router.push('/winlose')
    //     // emit biar menang
    //     //  terus store score nya
    //     this.$store.state.userScore = this.score
    //   }
    // }
  }
}
</script>

<style>

.section-blur {
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(10px);
  pointer-events: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

</style>
