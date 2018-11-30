
import vueRouter from 'vue-router';
import home from '../../components/index/home.vue';
import classify from '../../components/index/classify.vue';
import channel from '../../components/index/channel.vue';
import trolley from '../../components/index/trolley.vue';
import my from '../../components/index/my.vue';
import login from '../../components/index/login.vue';
import prodetails from '../../components/products/prodetails.vue';
import shoes from '../../components/products/shoes.vue';
import knitwear from '../../components/products/knitwear.vue';
import same from '../../components/products/same.vue';

export default new vueRouter({
	routes:[
		{
			path:`/home`,component:home
		},
		{
			path:`/classify`,component:classify
		},
		{
			path:`/channel`,
			component:channel
		},
		{
			path:`/trolley`,component:trolley
		},
		{
			path:`/my`,component:my
		},
		{
			path:`/login`,component:login
		},
		{
			path:`/prodetails`,component:prodetails
		},
//		{
//			path:`/path/:id`,
//			component:home
//		},
		{
			path:'/shoes',
			component:shoes
		},
		{
			path:'/same/:id',
			component:same
		},
		{
			path:`/`,component:home
		}
	]
})