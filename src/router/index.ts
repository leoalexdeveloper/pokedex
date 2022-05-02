import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/Home_View.vue"
const routes = [
	{path:"/", name:"Home", component:HomeView},
	{path:"/create", name:"CreateTeam", component:()=>import(/**webpackChunkName*/"../views/CreateTeam_View.vue")}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router