<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  created () {
    if (!localStorage.username) {
      this.$router.push('/login')
    } else {
      this.$router.push('/')
    }
  }
}
</script>
<style>

</style>
