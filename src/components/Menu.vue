<template>
  <div id="menu">
    <lang-switcher></lang-switcher>
    <h1>Web MIDI experiment</h1>
  </div>
</template>

<script>

  import LangSwitcher from 'components/LangSwitcher.vue'

  export default {
    name: 'Menu',
    components: {
      LangSwitcher
    }
  }

</script>

<style lang="scss" scoped>

  #menu{

    position: relative;;
    z-index: 1;
    top: 50;

    .router-link-active {
      text-decoration: line-through !important;
    }

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
