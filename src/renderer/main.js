import Vue from 'vue'
import clickoutside from './directive/clickoutside.js'
import ElementUI from 'element-ui';
import './assets/styles/element-variables.scss'
import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.use(ElementUI);
Vue.use(clickoutside)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
