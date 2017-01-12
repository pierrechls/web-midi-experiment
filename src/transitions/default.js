import Vue from 'vue'

Vue.component('default', {
  css: false,
  template: '\
    <transition\
      name="default"\
      mode="out-in"\
      v-on:before-enter="beforeEnter"\
      v-on:enter="enter"\
      v-on:after-enter="afterEnter"\
      v-on:enter-cancelled="enterCancelled"\
      v-on:before-leave="beforeLeave"\
      v-on:leave="leave"\
      v-on:after-leave="afterLeave"\
      v-on:leave-cancelled="leaveCancelled"\
    >\
      <slot></slot>\
    </transition>\
  ',
  methods: {
    beforeEnter: function (el) {
      // ...
    },
    enter: function (el, done) {
      TweenMax.fromTo(el, 0.5, {opacity: 0}, {opacity: 1, onComplete: function () {
        done()
      }}).delay(0.2)
    },
    afterEnter: function (el) {
      // ...
    },
    enterCancelled: function (el) {
      // ...
    },

    beforeLeave: function (el) {
      // ...
    },
    leave: function (el, done) {
      TweenMax.fromTo(el, 0.2, {opacity: 1}, {opacity: 0, onComplete: function () {
        done()
      }})
    },
    afterLeave: function (el) {
      // ...
    },
    leaveCancelled: function (el) {
      // ...
    }
  }
})
