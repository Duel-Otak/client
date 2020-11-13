<template>
  <div id="room">
    <User />
    <Question />
  </div>
</template>

<script>
import User from '@/components/dashboard/User.vue'
import Question from '@/components/dashboard/RoomList.vue'

export default {
  name: 'Room',
  components: {
    User, Question
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
