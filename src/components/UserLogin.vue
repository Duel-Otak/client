<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="col-lg-6 d-flex flex-column mt-2 justify-content-center">
          <h1>Adu Otak</h1>
          <hr>
          <h3>Is a multiplayer quiz truth or false that you can play with your beloved friends!</h3>
        </div>
        <div class="row d-flex justify-content-center pt-3" style="text-align: center">
          <div class="card w-50 p-3 border">
            <input v-model="username" type="text" placeholder="Username">
            <hr>
            <button @click.prevent="login" class="btn effect01 border border-light">
              <span>Play Game</span>
            </button>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="row d-flex justify-content-center pt-5 mt-3">
          <img src="../assets/marginalia-success.png" alt="" width="500px">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    login () {
      localStorage.setItem('username', this.username)
      this.$router.push('/')
      this.$socket.emit('userLogin', this.username)
      this.username = ''
    }
  }
}
</script>

<style scoped>

.buttons {
  display: flex;
  flex-direction: row;
      flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
/*   padding: 2em 0em; */
}
h1 {
  text-align: left;
  color: #444;
  letter-spacing: 0.05em;
  margin: 0 0 0.4em;
}

p {
  text-align: left;
  color: #444;
  letter-spacing: 0.05em;
  font-size: 0.8em;
  margin: 0 0 2em;
}

.btn {
  letter-spacing: 0.1em;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 45px;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
}
.btn:hover {
  text-decoration: none;
}
/*btn_background*/
.effect01 {
  color: #FFF;
  border: 4px solid #000;
  box-shadow:0px 0px 0px 1px #000 inset;
  background-color: #000;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;
  align-self: center;
}
.effect01:hover {
  border: 4px solid #666;
  background-color: #FFF;
  box-shadow:0px 0px 0px 4px #EEE inset;
}
/*btn_text*/
.effect01 span {
  transition: all 0.2s ease-out;
  z-index: 2;
}
.effect01:hover span{
  letter-spacing: 0.13em;
  color: #333;
}
/*highlight*/
.effect01:after {
  background: #FFF;
  border: 0px solid #000;
  content: "";
  height: 155px;
  left: -75px;
  opacity: .8;
  position: absolute;
  top: -50px;
  -webkit-transform: rotate(35deg);
          transform: rotate(35deg);
  width: 50px;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);/*easeOutCirc*/
  z-index: 1;
}
.effect01:hover:after {
  background: #FFF;
  border: 20px solid #000;
  opacity: 0;
  left: 120%;
  -webkit-transform: rotate(40deg);
          transform: rotate(40deg);
}
</style>
