<template>
  <div id="app">
    <menu-app></menu-app>
    <renderer></renderer>
  </div>
</template>

<script>

  import MenuApp from 'components/Menu'
  import Renderer from 'components/Renderer'

  export default {
    name: 'App',
    components: {
      MenuApp,
      Renderer
    },
    route: {
      data: function (transition) {

      }
    }
  }

</script>

<style lang="scss" src="assets/styles/app.scss"></style>
