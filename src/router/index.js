import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../index.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [{
	path: "/",
	name: "index",
	component: index
}]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router
