<template>
  <div id="app">
    <menu-app></menu-app>
    <renderer></renderer>
    <midi-controller></midi-controller>
  </div>
</template>

<script>

  import MenuApp from 'components/Menu'
  import Renderer from 'components/Renderer'
  import MidiController from 'components/MidiController'

  export default {
    name: 'App',
    components: {
      MenuApp,
      Renderer,
      MidiController
    },
    route: {
      data: function (transition) {

      }
    }
  }

</script>

<style lang="scss" src="assets/styles/app.scss"></style>
