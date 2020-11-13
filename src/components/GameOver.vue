<template>
  <div class="container">
      <div>
          <div class="button-center mt-2 mb-2">
              <button @click="backToRoom" class="btn btn-primary">Back To Room</button>
          </div>
        <div class="image-game-over">
            <img class="center p-3" src="https://media1.tenor.com/images/95b086d08546be2b72b7dfad7a87634e/tenor.gif?itemid=11264949">
        </div>
        <div class="table mt-2">
            <table class="table table-sm table-dark text-center">
                <thead>
                    <tr class="bg-success">
                        <th scope="col">Rank</th>
                        <th scope="col">Player Name</th>
                        <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(player, index) in players" :key="index" class="bg-warning">
                        <td>{{ index + 1 }}</td>
                        <td class="bg-primary">{{ player.username }}</td>
                        <td class="bg-danger">{{ player.correctAnswer }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'GameOver',
  data () {
    return {
      players: [
        {
          username: 'joko',
          correctAnswer: 5
        },
        {
          username: 'budi',
          correctAnswer: 8
        },
        {
          username: 'anto',
          correctAnswer: 7
        },
        {
          username: 'rini',
          correctAnswer: 6
        },
        {
          username: 'klepon',
          correctAnswer: 9
        }
      ] // ngambil data dari server siapa pemain dan jawabannya
    }
  },
  methods: {
    backToRoom () {
      this.$router.push('/')
    }
  },
  sockets: {
    sendTheWinnerToGameOver (dataPlayer) {
      this.players = dataPlayer
      console.log(dataPlayer, 'ini data dari server siapa aja pemainnya')
    }
  }
}
</script>

<style scoppe>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 25%;
  width: 50%;
  height: 50%;
}
</style>
