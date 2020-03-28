import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Error404 from '../views/Error404.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Login',
		component: Login
	},
	{
		path: '/Dashboard',
		name: 'Dashboard',
		component: Dashboard
	},
	{
		path: '/*',
		name: '404 Error',
		component: Error404
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router