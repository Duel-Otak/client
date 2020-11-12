<template>
  <div class="container add-room">
      <div class="fetch-room">
          <table>
              <thead>
                  <tr>
                      <th>No</th>
                      <th>List Room</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(room, index) in rooms" :key="room.id">
                      <td>{{ index + 1 }}</td>
                      <td>{{ room.name }}</td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div class="button">
        <button @click="createRoom" class="btn btn-primary">Make a new one</button>
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
