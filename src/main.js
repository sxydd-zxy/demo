import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueBus from 'vue-bus'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(vueBus)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
	router,
	render: function(h) {
		return h(App)
	}
}).$mount('#app')
