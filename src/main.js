import Vue from 'vue';
import App from './App.vue';
import vueRouter from 'vue-router';
import router from './assets/js/router.js';
Vue.use(vueRouter);
import './assets/css/cssreset.css';
import Mint from 'mint-ui';
Vue.use(Mint);
import '../node_modules/mint-ui/lib/style.css';
import  './assets/css/animate.css';

import Swiper from 'swiper';
//Vue.use(Swiper);
import '../node_modules/swiper/dist/css/swiper.min.css';

import axios from 'axios';
Vue.prototype.$http = axios;
import qs from 'qs';
Vue.prototype.$qs = qs;
new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
  mounted(){
		new Swiper('.swiper-container', {
					loop:true
				})
	}
})
