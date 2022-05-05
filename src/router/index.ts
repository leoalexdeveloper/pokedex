import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/Home_View.vue"
const routes = [
	{path:"/", name:"Home", component:HomeView},
	{
		path:"/create",
		name:"Create",
		component:()=>import(/**webpackChunkName*/"../views/Create_View.vue"),
		children:[
			{
				path:":teamName?",
				name:"CreateTeam",
				component:()=>import(/**webpackChunkName*/"../views/CreateTeam_View.vue"),
				children:[
					{
						path:":page?",
						name:"ShowPickPokemons",
						component:()=>import(/**webpackChunkName*/"../components/PokemonPickBoard.vue"),
					}
				]
			}
		]
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
