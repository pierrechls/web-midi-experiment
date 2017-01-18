<template>
  <h1>Hello</h1>
</template>

<script>

  import WebMidi from 'webmidi'

  export default {
    name: 'MidiController',
    data () {
      return {}
    },
    methods: {},
    mounted () {

      WebMidi.enable(function (err) {
        if (err) {
          console.log('WebMidi could not be enabled.', err)
        } else {
          console.log('WebMidi enabled!')
        }
      })

    }

  }

</script>

<style lang="scss" scoped>

</style>
