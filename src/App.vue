<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  // created () {
  //   if (!localStorage.username) {
  //     this.$router.push('/login')
  //   } else {
  //     if (this.$store.state.currentRoom) {
  //       const room = this.$store.state.currentRoom
  //       this.$router.push('/rooms/' + room.id)
  //     } else {
  //       this.$router.push('/')
  //     }
  //   }
  // }
}
</script>
<style>

</style>
