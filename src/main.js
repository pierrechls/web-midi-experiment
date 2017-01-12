import Vue from 'vue'
import App from 'src/App'

// Global vue stuffs
import 'gsap'
import 'src/transitions'
import 'locales/index'

// Routing
import router from 'lib/router'

// Store
import store from 'src/vuex/store'

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
