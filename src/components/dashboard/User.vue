<template>
  <div class="chat_list">
    <div class="input-group">
      <strong>Online Player</strong>
    </div>
    <ul class="user_list list-unstyled mb-0 mt-3">
      <li v-for="(user, i) in users" :key="i" class="active">
        <a href="javascript:void(0);">
          <img :src="getAvatar(user.username)" alt="avatar" />
          <div class="about">
            <div class="name">{{ user.username }}</div>
            <div class="status online"> <i class="zmdi zmdi-circle"></i> Online </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {

    }
  },
  created () {
  },

  computed: {
    users () {
      return this.$store.state.onlineUsers || localStorage.getItem('players')
    }
  },
  methods: {
    getAvatar (username) {
      return 'https://avatars.dicebear.com/api/avataaars/' + username + '.svg?mood[]=happy'
    }
  }
}
</script>

<style>

</style>
