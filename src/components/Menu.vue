<template>
  <div id="menu">
    <h1>Web MIDI experiment</h1>
  </div>
</template>

<script>

  export default {
    name: 'Menu'
  }

</script>

<style lang="scss" scoped>

  #menu{

    position: relative;;
    z-index: 1;
    top: 50;

    ul{
      padding: 0;
      li {
        display: inline-block;
        list-style: none;
        margin-left: 10px;

        a{
          text-decoration: none;
        }
      }
      li:first-child {
        margin-left: 0;
      }
    }
  }

</style>
