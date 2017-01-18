<template>
  <h1>Hello</h1>
</template>

<script>

  import WebMidi from 'webmidi'
  import MIDIController from 'lib/MIDIController'

  export default {
    name: 'MidiController',
    data () {
      return {}
    },
    methods: {},
    mounted () {

      console.clear();

      MIDIController.onNote( (n, v) => {
          console.log(n, v)
      })

    }

  }

</script>

<style lang="scss" scoped>

</style>
