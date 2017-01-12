import Vue from 'vue'
import App from 'src/App'

// Global vue stuffs
import 'gsap'
import 'src/transitions'

// Store
import store from 'src/vuex/store'

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
