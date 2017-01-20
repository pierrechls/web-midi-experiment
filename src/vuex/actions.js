export const setNegatif = function ({ dispatch, state }) {
  dispatch('SET_NEGATIF_VALUE')
}
export const setMidiState = function ({ dispatch, state }, connected) {
  dispatch('SET_MIDI_STATE', connected)
}
export const setMidiName = function ({ dispatch, state }, name) {
  dispatch('SET_MIDI_NAME', name)
}
export const setLastPad = function ({ dispatch, state }, number, velocity) {
  dispatch('SET_LAST_PAD', number, velocity)
}
export const setLastPitch = function ({ dispatch, state }, number, value) {
  dispatch('SET_LAST_PITCH', number, value)
}
