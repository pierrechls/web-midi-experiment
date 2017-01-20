<template>
  <div id="midi-controller-header">
    <div class="state">
      <p v-if="isConnected">{{ name }}</p>
      <p v-else>Please, connect your MIDI device</p>
    </div>
  </div>
</template>

<script>

  import WebMidi from 'webmidi'
  import MIDIController from 'lib/MIDIController'

  import { getMidiState, getMidiName } from 'src/vuex/getters'
  import { setMidiState, setMidiName, setLastPad, setLastPitch } from 'src/vuex/actions'

  export default {
    name: 'MidiController',
    vuex: {
      getters: {
        isConnected: getMidiState,
        name: getMidiName
      },
      actions: { setMidiState, setMidiName, setLastPad, setLastPitch }
    },
    mounted () {

      console.clear()

      MIDIController.onStateChange( (e) => {
          if(e.port.state === 'connected') {
            this.setMidiState(true)
            this.setMidiName(e.port.name)
          } else {
            this.setMidiState(false)
            this.setMidiName(null)
          }
      })

      MIDIController.onPad( (number, velocity) => {
          this.setLastPad(number, velocity)
      })

      MIDIController.onPitch( (number, value) => {
          this.setLastPitch(number, value)
      })

    }

  }

</script>

<style lang="scss" scoped>

  #midi-controller-header {
    position: relative;;
    z-index: 2;
    top: 50;
  }

</style>
