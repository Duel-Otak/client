<template>
  <div id="room">
    <Player />
    <Question />
  </div>
</template>

<script>
import Player from '@/components/room/Player.vue'
import Question from '@/components/room/Question.vue'
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
