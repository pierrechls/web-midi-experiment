<template>
  <div class="plant-view">
    <h1 v-html="$t('plant.title')"></h1>
    <p> <span v-if="seedNumber <= 1" v-html="$t('plant.seedText')"></span><span v-else v-html="$t('plant.seedsText')"></span></p>
    <button @click='plant' :disabled="seedNumber <= minSeed">-</button>
    <button @click='pullUp' :disabled="seedNumber >= maxSeed">+</button>
  </div>
</template>

<script>

  import { plant, pullUp } from 'src/vuex/actions'
  import { getSeed } from 'src/vuex/getters'
  import settings from 'lib/settings'

  export default {
    name: 'Plant',
    data: function () {
      return {
        maxSeed: settings.seed.max,
        minSeed: 0
      }
    },
    vuex: {
      getters: {
        seedNumber: getSeed
      },
      actions: {
        plant,
        pullUp
      }
    }
  }

</script>

<style lang="scss" scoped>

  @import "~assets/styles/colors.scss";

  h1{
    text-transform: uppercase;
  }

  button{
    background: $green;
    padding: 5px 20px;
    color: $white;
    border: 0;
    border-radius: 0;
    outline: none;

    &:disabled{
      background: $gray;
      color: $green;
    }
  }

</style>
