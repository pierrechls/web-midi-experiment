<template>
  <div id="app">
    <header>
      <h1>{{ msg }}</h1>
    </header>
    <renderer></renderer>
  </div>
</template>

<script>

  import Renderer from 'components/Renderer'

  export default {
    name: 'App',
    components: { Renderer },
    data () {
      return {
        msg: 'Web MIDI experiment'
      }
    }
  }

</script>

<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  header {
    z-index: 2;
    position: relative;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

</style>
