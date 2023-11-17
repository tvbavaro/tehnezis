import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify'
import Fragment from 'vue-fragment'

Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(Fragment.Plugin)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
