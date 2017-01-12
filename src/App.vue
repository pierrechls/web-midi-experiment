<template>
  <div id="app">
    <menu-app></menu-app>
    <!-- <transition name="default"> -->
      <router-view></router-view>
    <!-- <transition> -->
  </div>
</template>

<script>

  import MenuApp from 'components/Menu'

  export default {
    name: 'App',
    components: {
      MenuApp
    },
    route: {
      data: function (transition) {

      }
    }
  }

</script>

<style lang="scss" src="assets/styles/app.scss"></style>
