<template>
  <div class="container create-room mt-5">
      <form @click.prevent="addRoom">
        <div class="form-group">
            <label for="roomName">Room Name</label>
            <input type="text" v-model="roomName">
        </div>
        <div class="form-submit">
            <button class="btn btn-primary">Create Room</button>
        </div>
      </form>
  </div>
</template>

<script>
export default {
  name: 'CreateRoom',
  data () {
    return {
      roomName: ''
    }
  },
  methods: {
    addRoom () {
      const payload = {
        name: this.roomName
      }
      this.$store.dispatch('createRoom', payload)
    }
  }
}
</script>

<style>

</style>
