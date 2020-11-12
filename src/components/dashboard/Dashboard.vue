<template>
  <div id="room">
    <Player />
    <Question />
  </div>
</template>

<script>
import Player from '@/components/dashboard/User.vue'
import Question from '@/components/dashboard/RoomList.vue'

export default {
  name: 'Room',
  components: {
    Player, Question
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
