<template>
  <div class="container">
      <div>
          <div class="button-center mt-2 mb-2">
              <button @click="backToRoom" class="btn btn-primary">Back To Room</button>
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
                    <tr class="bg-warning">
                        <td>1</td>
                        <td class="bg-primary">Mark</td>
                        <td class="bg-danger">7</td>
                    </tr>
                    <tr class="bg-info">
                        <td>2</td>
                        <td class="bg-primary">John</td>
                        <td class="bg-danger">8</td>
                    </tr>
                    <tr class="bg-success">
                        <td>3</td>
                        <td class="bg-primary">Jane</td>
                        <td class="bg-danger">9</td>
                    </tr>
                    <tr class="bg-secondary">
                        <td>4</td>
                        <td class="bg-primary">Mark</td>
                        <td class="bg-danger">7</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="image-game-over">
            <img class="center p-3" src="https://media1.tenor.com/images/95b086d08546be2b72b7dfad7a87634e/tenor.gif?itemid=11264949">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'GameOver',
  methods: {
    backToRoom () {
      this.$router.push('/')
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
.btn {
    margin-left: auto;
    margin-right: auto;
}
</style>
