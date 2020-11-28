import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//BOOTSTRAP VUE
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//VUE SWEET ALERT
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const options = {
  confirmButtonColor: '#26A65B',
  cancelButtonColor: '#e74c3c',
};


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueSweetalert2, options)


new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
		this.$store.commit('initialiseStore');
		this.$store.commit('initialiseProfile')
	}

}).$mount('#app')

