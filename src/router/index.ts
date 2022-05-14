//import vue lib
import { createRouter, createWebHistory } from "vue-router"

//import views
import HomeView from "../views/Home_View.vue"

const routes = [
	{path:"/", name:"Home", component:HomeView},
	{
		path:"/create",
		name:"Create",
		component:()=>import(/**webpackChunkName*/"../views/Create_View.vue"),
		children:[
			{
				path:"/create/:teamName?",
				name:"CreateTeam",
				component:()=>import(/**webpackChunkName*/"../views/CreateTeam_View.vue"),
				children:[
					{
						path:":page?",
						name:"ShowPickPokemons",
						component:()=>import(/**webpackChunkName*/"../components/PokemonPickBoard.vue"),
						children:[
							{
								path:":selectedPokeId?",
								name:"ShowPokemonSpecs",
								component:()=>import(/**webpackChunkName*/"../components/PokemonSpecsBoard.vue")

							}
						]
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
