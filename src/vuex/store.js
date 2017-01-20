import Vue from 'vue'
import Vuex from 'vuex'

// Make vue aware of Vuex
Vue.use(Vuex)

// Create an object to hold the initial state when
// the app starts up
const state = {
  negatif: false,
  midi: {
    connected: false,
    name: null
  },
  lastPad: {
    number: null,
    velocity: null
  },
  lastPitch: {
    number: null,
    value: null
  }
}

// Create an object storing various mutations. We will write the mutation
const mutations = {
  SET_NEGATIF_VALUE (state) {
    state.negatif = !state.negatif
  },
  SET_MIDI_STATE (state, connected) {
    state.midi.connected = connected
  },
  SET_MIDI_NAME (state, name) {
    state.midi.name = name
  },
  SET_LAST_PAD (state, number, velocity) {
    state.lastPad.number = number
    state.lastPad.velocity = velocity
  },
  SET_LAST_PITCH (state, number, value) {
    state.lastPitch.number = number
    state.lastPitch.value = value
  }
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state,
  mutations
})
