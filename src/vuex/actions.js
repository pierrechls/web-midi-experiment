export const plant = function ({ dispatch, state }) {
  dispatch('PLANT', 1)
}

export const pullUp = function ({ dispatch, state }) {
  dispatch('PULL_UP', 1)
}

export const translate = function ({ dispatch, state }, lang) {
  dispatch('TRANSLATE', lang)
}
