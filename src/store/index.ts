import { createStore } from "vuex"
import VuexPersistence from "vuex-persist"
import Api from "../api/Api"
import EPokemonList from "../entities/PokemonList"

const localPersist = new VuexPersistence({
	storage: window.localStorage
}).plugin

export default createStore({
	state:{

	},
	mutations:{

	},
	actions:{

	},
	modules:{
		pokemons:{
			state:()=>{
				return{
					pokemonList: {},
					currentTeamObject: {},
					currentEditTeam: [],
					currentEditPage: 1,
					maxPokemonPerPage: 8
				}
			},
			mutations:{
				setPokemonList(state, payload){
					Object.assign(state.pokemonList, {...payload})
				},
				setCurrentTeamObject(state, payload){
					Object.assign(state.currentTeamObject, {...payload})
				},
				setCurrentEditPage(state, payload){
					state.currentEditPage = payload
				}
			},
			actions:{
				getPokemonListFromApi({commit}, payload){
					Api.get(payload).then(res => commit("setPokemonList", new EPokemonList(res.count, res.next, res.previous, res.results)))
				}
			},
			getters:{

			}
		}
	},
	getters:{

	},
	plugins:[localPersist]
})
