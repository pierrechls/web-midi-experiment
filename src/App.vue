<template>
  <div id="app" :class="negatif ? 'negatif' : ''">
    <menu-app></menu-app>
    <midi-controller></midi-controller>
    <renderer></renderer>
  </div>
</template>

<script>

  import MenuApp from 'components/Menu'
  import Renderer from 'components/Renderer'
  import MidiController from 'components/MidiController'

  import { getNegatif } from 'src/vuex/getters'

  export default {
    name: 'App',
    components: {
      MenuApp,
      Renderer,
      MidiController
    },
    vuex: {
      getters: {
        negatif: getNegatif
      }
    },
    route: {
      data: function (transition) {

      }
    }
  }

</script>

<style lang="scss" src="assets/styles/app.scss"></style>
