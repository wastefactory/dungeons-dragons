// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'flexboxgrid/css/flexboxgrid.min.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: '#e20031',
  failedColor: 'red',
  height: '2px'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
