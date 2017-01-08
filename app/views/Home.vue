<template>
  <div class="home-view">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <links></links>
  </div>
</template>

<script>

  import Links from 'components/Links'

  export default {
    name: 'Home',
    components: { Links },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }

</script>

<style>

</style>
