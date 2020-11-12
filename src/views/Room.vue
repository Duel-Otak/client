<template>
  <div class="container add-room mt-5">
      <div class="button">
        <button @click="createRoom" class="btn btn-primary">Make a new one</button>
      </div>
      <div class="row">
        <div class="col-sm-4">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">Room 1</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Join</a>
            </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">Room 2</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Join</a>
            </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">Room 3</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Join</a>
            </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Room',
  methods: {
    createRoom () {
      this.$router.push('/create-room')
    },
    fetchRoom () {
      this.$store.dispatch('fetchAllRoom')
    }
  },
  created () {
    this.fetchRoom()
  },
  computed: {
    rooms () {
      return this.$store.state.room
    }
  }
}
</script>

<style>

</style>
