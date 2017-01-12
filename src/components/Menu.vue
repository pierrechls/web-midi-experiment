<template>
  <div id="menu">
    <lang-switcher></lang-switcher>
    <ul>
      <li><router-link :to="{ name: 'Home' }" v-html="$t('menu.home')"></router-link></li>
      <li><router-link :to="{ name: 'Plant' }" v-html="$t('menu.plant')"></router-link></li>
      <li><router-link :to="{ name: 'Garden' }" v-html="$t('menu.garden')"></router-link></li>
    </ul>
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
